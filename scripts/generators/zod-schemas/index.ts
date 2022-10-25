/** Heavily inspired by https://github.com/owncoral/pgzod */
import { capitalCase, pascalCase } from 'change-case'
import CodeBlockWriter from 'code-block-writer'
import fs from 'fs-extra'

import { getColumns, GetColumnsResult } from './columns'
import { getEnums } from './enums'
import { PostgresToZodTypes } from './utils'

export type GenerateZodSchemasOptions = {
  /**
   * The Postgres schema from which to export.
   *
   * @default
   *  "public"
   */
  schema?: string
}

const defaultOptions = {
  schema: 'public',
} as const

const writer = new CodeBlockWriter({
  indentNumberOfSpaces: 2,
  useSingleQuote: true,
})

export default async function generateZodSchemas(outfile: string, options: GenerateZodSchemasOptions) {
  writer.writeLine(`import z from 'zod';`)
  writer.blankLine()

  const { schema } = { ...defaultOptions, ...options }
  const [enums, cols] = await Promise.all([getEnums(schema), getColumns(schema)])

  const tables = cols.reduce(
    // @ts-expect-error ts can't infer ts[table] properly
    (ts, col) => ({ ...ts, [col.table]: [...(ts[col.table] ? ts[col.table] : []), col] }),
    {} as Record<string, GetColumnsResult[]>,
  )

  // Step 1a: write out our enums & create a mapping back to them
  const enumTypesMap: Record<string, string> = {}
  for (const e of enums) {
    const name = pascalCase(e.name)
    const value = `z.enum(["${e.values.join('", "')}"])`
    // Export a Zod enum for this PG enum
    writer.writeLine(`export const ${name} = ${value};`)
    // Keep track of this enum in our typemap, so we can look it up via Postgres typname
    enumTypesMap[e.name] = name // { ..., some_enum: SomeEnum }
  }
  writer.blankLine()

  const typesMap = createTypesMap(enumTypesMap)

  // Step 1b: Add a Json type if needed
  // Add json parsing according to Zod documentation.
  // https://github.com/colinhacks/zod#json-type
  const requiresJson = cols.some((c) => c.udt === 'jsonb' || c.udt === 'json')
  writer.conditionalWriteLine(
    requiresJson,
    `const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
type Literal = z.infer<typeof literalSchema>;
type Json = Literal | { [key: string]: Json } | Json[];
export const JsonSchema: z.ZodType<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(JsonSchema), z.record(JsonSchema)])
);
  `,
  )
  writer.conditionalBlankLine(requiresJson)

  // Step 2: Write out all our table schemas, keeping track of them so we can export them later in an array
  const tablesEntries: string[] = []
  for (const [_name, cols] of Object.entries(tables)) {
    const friendlyName = capitalCase(_name)
    const schemaName = `${pascalCase(_name)}Schema` // NOTE: append 'Schema' to disamiguate it from other types related to the table
    tablesEntries.push(`{ name: '${_name}', displayName: '${friendlyName}', schema: ${schemaName} }`)
    writer
      .write(`export const ${schemaName} = z.object(`)
      .inlineBlock(() => {
        for (const col of cols) {
          const colName = col.column
          const colValue = typesMap[col.udt]
          if (!colValue) {
            throw new Error(
              `Could not find type mapping for type '${col.udt}' in column:\n${JSON.stringify(col, undefined, 2)}`,
            )
          }

          writer
            .write(`${colName}: ${colValue}`)
            .conditionalWrite(col.nullable, '.nullable().optional()')
            .conditionalWrite(!col.nullable && (col.default !== null || col.generated === 'ALWAYS'), '.optional()')
            .write(',\n')
        }
      })
      .write(');')
    writer.writeLine(`export type T${schemaName} = z.infer<typeof ${schemaName}>;`)

    writer.blankLine()
  }
  writer.blankLine()

  // Step 3: Also export a map of table metadata
  writer.writeLine(`export const tables = [`)
  const level = writer.getIndentationLevel()
  writer.setIndentationLevel(level + 1)
  writer.writeLine(tablesEntries.join(',\n'))
  writer.write('];')
  writer.setIndentationLevel(level)

  await fs.writeFile(outfile, writer.toString())
}

/**
 * Creates a mapping from Postgres types to Zod definitions.
 *
 * @param customZodTypes - A custom mapping, typically used for user-defined PG enums.
 */
function createTypesMap(customZodTypes: Record<string, string>) {
  const map = { ...PostgresToZodTypes, ...customZodTypes } as Record<string, string>
  const proxy = new Proxy(map, {
    get: (object, prop: string) => {
      if (prop in object) return object[prop]

      // NOTE: PostgreSQL returns array types as the base type prepended with an underscore
      const arrMatch = prop.match(/^_(.*)/)
      if (arrMatch && arrMatch[1] && arrMatch[1] in object) return `z.array(${object[arrMatch[1]] as string})`

      console.warn(`Could not find type in types map, defaulting to Zod constructor: '${prop}'`)
      return prop in object ? object[prop] : `z.${prop}()`
    },
  })
  return proxy
}
