import path from 'path'

import { ImportDeclarationStructure, OptionalKind, Project, SourceFile, VariableDeclarationKind } from 'ts-morph'
import { SemicolonPreference } from 'typescript'

import { assertUsage } from '../../shared/utils/assert'
import { GENERATED_RESOURCES_GLOB, RESOURCES_OUTPUT_FILE, USER_RESOURCES_GLOB } from '../constants'

type ResourceFileMap = {
  schemaFile: string
  columnsFile: string
  resolversFile: string
}

type AllResourceFileMap = Record<string, ResourceFileMap>

export async function buildMergedResources() {
  console.log('building merged resources...')
  const project = new Project()

  const generatedFiles = project.getSourceFiles(GENERATED_RESOURCES_GLOB)
  const overridesFiles = project.getSourceFiles(USER_RESOURCES_GLOB)

  const resourceFileMap: AllResourceFileMap = {}
  for (const file of [...generatedFiles, ...overridesFiles]) {
    const id = file.getBaseNameWithoutExtension()
    const dir = file.getDirectoryPath()
    if (!(id in resourceFileMap)) {
      resourceFileMap[id] = {} as ResourceFileMap
    }

    file.getExportSymbols().forEach((sym) => {
      // because overrides come after generated in our for-loop, we can
      // rely on them to override any keys here in later iterations
      if (sym.getName() === 'schema') resourceFileMap[id].schemaFile = path.resolve(dir, id)
      if (sym.getName() === 'columns') resourceFileMap[id].columnsFile = path.resolve(dir, id)
      if (sym.getName() === 'resolvers') resourceFileMap[id].resolversFile = path.resolve(dir, id)
    })
  }

  // Check that we've found all the exports we need
  Object.entries(resourceFileMap).forEach(([id, fileMap]) => {
    const makeErr = (type: string) => `No ${type} found for resource ${id}. Did you forget to export it?`
    assertUsage(fileMap.schemaFile, makeErr('schema'))
    assertUsage(fileMap.columnsFile, makeErr('columns'))
    assertUsage(fileMap.resolversFile, makeErr('resolvers'))
  })

  const file = project.createSourceFile(RESOURCES_OUTPUT_FILE, undefined, { overwrite: true })
  generateMergedFile(file, resourceFileMap)

  await file.save()
}

const resourcePrefix = (id: string) => `${id}__`
const schemaIdentifier = (id: string) => resourcePrefix(id) + 'schema'
const columnsIdentifier = (id: string) => resourcePrefix(id) + 'columns'
const resolversIdentifier = (id: string) => resourcePrefix(id) + 'resolvers'

function generateMergedFile(file: SourceFile, resourceFileMap: AllResourceFileMap) {
  file.addImportDeclarations([
    { namedImports: ['z'], moduleSpecifier: 'zod' },
    { namedImports: ['HonchoResource'], moduleSpecifier: '@honcho/types' },
  ])

  const resourceImports = Object.entries(resourceFileMap).map<OptionalKind<ImportDeclarationStructure>[]>(
    ([id, { schemaFile, columnsFile, resolversFile }]) => [
      { namedImports: [{ name: 'schema', alias: schemaIdentifier(id) }], moduleSpecifier: schemaFile },
      { namedImports: [{ name: 'columns', alias: columnsIdentifier(id) }], moduleSpecifier: columnsFile },
      { namedImports: [{ name: 'resolvers', alias: resolversIdentifier(id) }], moduleSpecifier: resolversFile },
    ],
  )
  file.addImportDeclarations(resourceImports.flat())

  file.addVariableStatements(
    Object.keys(resourceFileMap).map((id) => ({
      declarationKind: VariableDeclarationKind.Const,
      leadingTrivia: (w) => w.blankLineIfLastNot(),
      declarations: [
        {
          name: id,
          type: `HonchoResource<z.infer<typeof ${schemaIdentifier(id)}>>`,
          initializer(writer) {
            writer.block(() => {
              writer.writeLine(`schema: ${schemaIdentifier(id)},`)
              writer.writeLine(`columns: ${columnsIdentifier(id)},`)
              // Only add a resolver for SSR
              writer.writeLine(`resolvers: ${resolversIdentifier(id)},`)
            })
          },
        },
      ],
    })),
  )

  file.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    leadingTrivia: (w) => w.blankLineIfLastNot(),
    declarations: [{ name: '__honcho_resources', initializer: `{ ${Object.keys(resourceFileMap).join(', ')} }` }],
  })

  file.addExportAssignment({
    expression: '__honcho_resources',
    isExportEquals: false,
  })

  file.formatText({
    indentSize: 2,
    convertTabsToSpaces: true,
    ensureNewLineAtEndOfFile: true,
    semicolons: SemicolonPreference.Remove,
  })
}
