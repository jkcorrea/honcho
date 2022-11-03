import path from 'path'

import { ImportDeclarationStructure, Project, SourceFile, StructureKind, VariableDeclarationKind } from 'ts-morph'
import { SemicolonPreference } from 'typescript'

import { DMMF } from '@prisma/generator-helper'

import {
  columnsName,
  getCellRenderer,
  getZodConstructor,
  humanName,
  metaName,
  routerName,
  schemaName,
  schemaTypeName,
  unrelatedSchemaName,
  unrelatedSchemaTypeName,
  writeArray,
} from './util'

export class ModelGenerator {
  private model: DMMF.Model
  private indexFile: SourceFile
  private schemaFile: SourceFile
  private columnsFile: SourceFile
  private routerFile: SourceFile

  constructor(model: DMMF.Model, project: Project, outDir: string) {
    this.model = model

    const modelOutDir = path.join(outDir, `${model.name.toLowerCase()}`)
    this.indexFile = project.createSourceFile(path.join(modelOutDir, 'index.ts'), {}, { overwrite: true })
    this.routerFile = project.createSourceFile(path.join(modelOutDir, 'router.ts'), {}, { overwrite: true })
    this.schemaFile = project.createSourceFile(path.join(modelOutDir, 'schema.ts'), {}, { overwrite: true })
    this.columnsFile = project.createSourceFile(path.join(modelOutDir, 'columns.ts'), {}, { overwrite: true })
  }

  public run() {
    this.generateSchemaFile()
    this.generateColumnsFile()
    this.generateRouterFile()
    this.generateIndexFile()

    // Format each
    ;[this.indexFile, this.schemaFile, this.columnsFile, this.routerFile].forEach((f) =>
      f.formatText({
        indentSize: 2,
        convertTabsToSpaces: true,
        semicolons: SemicolonPreference.Remove,
      }),
    )
  }

  private generateSchemaFile() {
    const model = this.model // some nested fns dont retain `this` context

    // #region Imports
    const importList: ImportDeclarationStructure[] = [
      {
        kind: StructureKind.ImportDeclaration,
        namespaceImport: 'z',
        moduleSpecifier: 'zod',
      },
    ]

    const enumFields = [...new Set(model.fields.filter((f) => f.kind === 'enum'))]
    const relationFields = [...new Set(model.fields.filter((f) => f.kind === 'object'))]

    if (enumFields.length > 0) {
      importList.push({
        kind: StructureKind.ImportDeclaration,
        isTypeOnly: enumFields.length === 0,
        moduleSpecifier: '@prisma/client',
        namedImports: [...new Set(enumFields.map((f) => f.type))],
      })
    }

    if (relationFields.length > 0) {
      const filteredFields = relationFields.filter((f) => f.type !== model.name)

      if (filteredFields.length > 0) {
        importList.push({
          kind: StructureKind.ImportDeclaration,
          moduleSpecifier: '../',
          namedImports: Array.from(
            new Set(filteredFields.flatMap((f) => [schemaTypeName(f.type), schemaName(f.type)])),
          ),
        })
      }
    }

    if (model.fields.some((f) => f.type === 'Json')) {
      importList.push({
        kind: StructureKind.ImportDeclaration,
        namedImports: ['JsonSchema'],
        moduleSpecifier: '@honcho/core',
      })
    }

    this.schemaFile.addImportDeclarations(importList)
    // #endregion

    // #region Schemas
    const relations = model.fields.filter((f) => f.kind === 'object')

    this.schemaFile.addVariableStatement({
      declarationKind: VariableDeclarationKind.Const,
      isExported: true,
      leadingTrivia: (writer) => writer.blankLineIfLastNot(),
      declarations: [
        {
          name: unrelatedSchemaName(model.name),
          initializer(writer) {
            writer
              .write('z.object(')
              .inlineBlock(() => {
                model.fields
                  .filter((f) => f.kind !== 'object')
                  .forEach((field) => {
                    writer
                      .write(`${field.name}: ${getZodConstructor(field)}`)
                      .write(',')
                      .newLine()
                  })
              })
              .write(')')
          },
        },
      ],
    })

    // type __TModelSchema = z.infer<...>
    this.schemaFile.addInterfaces([
      {
        name: unrelatedSchemaTypeName(model.name),
        isExported: true,
        extends: [`z.infer<typeof ${unrelatedSchemaName(model.name)}>`],
      },
      // interface TModelSchema extends __TModelSchema { ... }
      {
        name: schemaTypeName(model.name),
        isExported: true,
        leadingTrivia: (writer) => writer.blankLineIfLastNot(),
        extends: [unrelatedSchemaTypeName(model.name)],
        properties: relations.map((rel) => ({
          hasQuestionToken: !rel.isRequired,
          name: rel.name,
          type: `${schemaTypeName(rel.type)}${rel.isList ? '[]' : ''}${!rel.isRequired ? ' | null' : ''}`,
        })),
      },
    ])

    this.schemaFile.addStatements((writer) =>
      writeArray(writer, [
        '',
        '/**',
        ` * ${schemaName(model.name)} contains all relations on your model in addition to the scalars`,
        ' *',
        ' * NOTE: Lazy required in case of potential circular dependencies within schema',
        ' */',
      ]),
    )

    this.schemaFile.addVariableStatement({
      declarationKind: VariableDeclarationKind.Const,
      isExported: true,
      declarations: [
        {
          name: schemaName(model.name),
          type: `z.ZodSchema<${schemaTypeName(model.name)}>`,
          initializer(writer) {
            writer
              .write(`z.lazy(() => ${unrelatedSchemaName(model.name)}.extend(`)
              .inlineBlock(() => {
                relations.forEach((rel) => {
                  // TODO see todo inside `getZodConstructor`
                  // writeArray(writer, getJSDocs(field.documentation))
                  writer
                    .write(`${rel.name}: ${getZodConstructor(rel)}`)
                    .write(',')
                    .newLine()
                })
              })
              .write('))')
          },
        },
      ],
    })
    // #endregion
  }

  private generateColumnsFile() {
    const model = this.model

    const schemaType = unrelatedSchemaTypeName(model.name)

    this.columnsFile.addImportDeclarations([
      {
        kind: StructureKind.ImportDeclaration,
        namedImports: ['createColumnHelper', 'IdentifiedColumnDef'],
        moduleSpecifier: '@tanstack/react-table',
      },
      {
        namedImports: ['cells'],
        moduleSpecifier: '@honcho/ui',
      },
      {
        kind: StructureKind.ImportDeclaration,
        namedImports: [schemaType],
        moduleSpecifier: './schema',
        leadingTrivia: (w) => w.blankLineIfLastNot(),
      },
    ])

    this.columnsFile.addVariableStatements([
      {
        declarationKind: VariableDeclarationKind.Const,
        leadingTrivia: (writer) => writer.blankLineIfLastNot(),
        declarations: [
          {
            name: 'colHelper',
            initializer: `createColumnHelper<${schemaType}>()`,
          },
        ],
      },
      {
        declarationKind: VariableDeclarationKind.Const,
        isExported: true,
        declarations: [
          {
            name: columnsName(model.name),
            type: `Record<keyof ${schemaType}, IdentifiedColumnDef<${schemaType}, any>>`,
            initializer(writer) {
              writer.inlineBlock(() => {
                model.fields
                  .filter((f) => f.kind !== 'object')
                  .forEach((field) =>
                    writer
                      .newLineIfLastNot()
                      .write(`${field.name}: colHelper.accessor('${field.name}' ,`)
                      .inlineBlock(() => {
                        writer.writeLine(`cell: ${getCellRenderer(field)},`)
                        writer.writeLine(`header: '${humanName(field.name)}',`)
                      })
                      .write('),'),
                  )
              })
            },
          },
        ],
      },
    ])
  }

  private generateRouterFile() {
    const model = this.model

    this.routerFile.addImportDeclaration({
      kind: StructureKind.ImportDeclaration,
      namedImports: ['router', 'resourceProcedure'],
      moduleSpecifier: '@honcho/server',
    })

    this.routerFile.addVariableStatements([
      {
        declarationKind: VariableDeclarationKind.Const,
        isExported: true,
        leadingTrivia: (w) => w.blankLineIfLastNot(),
        declarations: [
          {
            name: 'findMany',
            initializer(writer) {
              writer
                .write(`resourceProcedure.query(({ ctx }) => `)
                .inlineBlock(() => writer.writeLine('return ctx.prisma.event.findMany()'))
                .write(')')
            },
          },
        ],
      },
      {
        declarationKind: VariableDeclarationKind.Const,
        leadingTrivia: (w) => w.blankLineIfLastNot(),
        declarations: [
          {
            name: routerName(model.name),
            initializer(writer) {
              writer
                .write('router(')
                .inlineBlock(() => {
                  writer.writeLine('findMany,')
                })
                .write(')')
            },
          },
        ],
      },
    ])

    this.routerFile.addExportAssignment({
      expression: routerName(model.name),
      isExportEquals: false,
    })
  }

  private generateIndexFile() {
    const model = this.model

    const schema = schemaName(model.name)
    const __schema = unrelatedSchemaName(model.name)
    const columns = columnsName(model.name)

    // Import some things we'll re-export within our meta object
    this.indexFile.addImportDeclarations([
      {
        namedImports: [__schema, schema],
        moduleSpecifier: './schema',
      },
      {
        namedImports: [columns],
        moduleSpecifier: './columns',
      },
    ])

    // Make our ModelMeta object
    this.indexFile.addVariableStatement({
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: metaName(model.name),
          initializer(writer) {
            writer
              .write('Object.freeze(')
              .inlineBlock(() => {
                const props = {
                  name: `"${model.name}"`,
                  dbName: `"${model.dbName ?? model.name}"`,
                  humanName: `"${humanName(model.name)}"`,
                  schema,
                  __schema,
                  columns,
                }
                writeArray(
                  writer,
                  Object.entries(props).map(([k, v]) => `${k}: ${v},`),
                )
              })
              .write(')')
          },
        },
      ],
    })

    // Default export ModelMeta
    this.indexFile.addExportAssignment({
      isExportEquals: false,
      expression: metaName(model.name),
    })

    // Export everything else from all our files
    this.indexFile.addExportDeclarations([{ moduleSpecifier: './columns' }, { moduleSpecifier: './schema' }])
  }
}

/**
 * Generates an index file at the top-level output dir that re-exports everything.
 *
 * Also exports a `models` helper that contains a map of all ModelMetas.
 */
export const generateBarrelFile = (models: DMMF.Model[], indexFile: SourceFile) => {
  // Import all the model metas
  models.forEach((model) => {
    indexFile.addImportDeclarations([
      {
        moduleSpecifier: `./${model.name.toLowerCase()}`,
        defaultImport: metaName(model.name),
      },
    ])

    // Re-export everything
    indexFile.addExportDeclaration({
      moduleSpecifier: `./${model.name.toLowerCase()}`,
    })
  })

  // Create a ModelMeta map & export it
  indexFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    isExported: true,
    leadingTrivia: (writer) => writer.blankLineIfLastNot(),
    declarations: [
      {
        name: 'models',
        initializer(writer) {
          writer
            .write('Object.freeze(')
            .inlineBlock(() => {
              writeArray(
                writer,
                models.map((m) => `${m.name}: ${metaName(m.name)},`),
              )
            })
            .write(')')
        },
      },
    ],
  })

  // Export a helper to determine if a model name is valid
  indexFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    isExported: true,
    leadingTrivia: (writer) => writer.blankLineIfLastNot(),
    declarations: [
      {
        name: 'isValidModelName',
        initializer: `(name: string): name is keyof typeof models => name in models`,
      },
    ],
  })

  indexFile.formatText({
    indentSize: 2,
    convertTabsToSpaces: true,
    semicolons: SemicolonPreference.Remove,
  })
}

/**
 * Generates the top-level honcho router file.
 * NOTE: We separate this out so the frontend doesn't import server code defined in the routers.
 */
export const generateHonchoRouterFile = (models: DMMF.Model[], routerFile: SourceFile) => {
  routerFile.addImportDeclaration({
    trailingTrivia: (w) => w.blankLine(),
    namedImports: ['router'],
    moduleSpecifier: '@honcho/server',
  })

  // Import all the model metas
  models.forEach((model) => {
    routerFile.addImportDeclaration({
      moduleSpecifier: `./${model.name.toLowerCase()}/router`,
      defaultImport: routerName(model.name),
    })
  })

  // Combine resource routers
  routerFile.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    isExported: true,
    declarations: [
      {
        name: 'resourceRouter',
        initializer(writer) {
          writer
            .write('router(')
            .inlineBlock(() => {
              writeArray(
                writer,
                models.map((m) => `${m.name}: ${routerName(m.name)},`),
              )
            })
            .write(')')
        },
      },
    ],
  })

  routerFile.formatText({
    indentSize: 2,
    convertTabsToSpaces: true,
    semicolons: SemicolonPreference.Remove,
  })
}
