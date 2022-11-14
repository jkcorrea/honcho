import { capitalCase } from 'change-case'
import { ImportDeclarationStructure, SourceFile, StructureKind, VariableDeclarationKind } from 'ts-morph'
import { SemicolonPreference } from 'typescript'

import { DMMF } from '@prisma/generator-helper'

import { getZodConstructor, resourceName, schemaName, schemaTypeName, writeArray } from './util'

export function generateResourceFile(model: DMMF.Model, file: SourceFile) {
  // #region Imports
  const importList: ImportDeclarationStructure[] = [
    {
      kind: StructureKind.ImportDeclaration,
      namespaceImport: 'z',
      moduleSpecifier: 'zod',
    },
    {
      kind: StructureKind.ImportDeclaration,
      namedImports: ['prisma', 'Resolvers', 'Resource', 'ResourceColumns'],
      moduleSpecifier: '@honcho/server',
    },
  ]

  // Do we need to support enums?
  const enumFields = [...new Set(model.fields.filter((f) => f.kind === 'enum'))]
  if (enumFields.length > 0) {
    importList.push({
      kind: StructureKind.ImportDeclaration,
      isTypeOnly: enumFields.length === 0,
      moduleSpecifier: '@prisma/client',
      namedImports: [...new Set(enumFields.map((f) => f.type))],
    })
  }

  // Do we need to support JSON types?
  if (model.fields.some((f) => f.type === 'Json')) {
    importList.push({
      kind: StructureKind.ImportDeclaration,
      namedImports: ['JsonSchema'],
      moduleSpecifier: '@honcho/core',
    })
  }

  file.addImportDeclarations(importList)
  // #endregion

  // #region Schemas
  // const ModelSchema = z.object({ ... })
  file.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    isExported: true,
    leadingTrivia: (writer) => writer.blankLineIfLastNot(),
    declarations: [
      {
        name: schemaName(model.name),
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

  // type TModelSchema = z.infer<...>
  file.addTypeAlias({
    name: schemaTypeName(model.name),
    type: `z.infer<typeof ${schemaName(model.name)}>`,
    isExported: true,
  })
  // #endregion

  file.addVariableStatements([
    // Resource
    {
      declarationKind: VariableDeclarationKind.Const,
      isExported: true,
      declarations: [
        {
          name: resourceName(model.name),
          initializer(writer) {
            writer.writeLine(`new Resource('${model.name}', ${schemaName(model.name)})`)
          },
        },
      ],
    },
    // Columns
    {
      declarationKind: VariableDeclarationKind.Const,
      isExported: true,
      leadingTrivia: (w) => w.blankLineIfLastNot(),
      declarations: [
        {
          name: 'columns',
          type: `ResourceColumns<typeof ${resourceName(model.name)}>`,
          initializer(writer) {
            writer.inlineBlock(() => {
              model.fields
                .filter((f) => f.kind !== 'object')
                .forEach((field) => {
                  writer
                    .write(`${field.name}: `)
                    .inlineBlock(() => {
                      writer.write(`title: '${capitalCase(field.name)}'`)
                    })
                    .write(',\n')
                })
            })
          },
        },
      ],
    },
    // Resolvers
    {
      declarationKind: VariableDeclarationKind.Const,
      isExported: true,
      leadingTrivia: (w) => w.blankLineIfLastNot(),
      declarations: [
        {
          name: 'resolvers',
          type: `Resolvers<typeof ${resourceName(model.name)}>`,
          initializer(writer) {
            writer.inlineBlock(() => {
              writer
                .write(`async list() `)
                .inlineBlock(() => {
                  writer.writeLine(`return prisma.${model.name}.findMany()`)
                })
                .write(',\n')
              writer
                .write(`async show(id) `)
                .inlineBlock(() => {
                  writer.writeLine(
                    `return prisma.${model.name}.findUniqueOrThrow({ where: { [${resourceName(
                      model.name,
                    )}.primaryKey]: id } })`,
                  )
                })
                .write(',\n')
              writer
                .write(`async update(id, _data) `)
                .inlineBlock(() => {
                  writer.writeLine(`const data = ${schemaName(model.name)}.parse(_data)`)
                  writer.writeLine(
                    `await prisma.${model.name}.update({ where: { [${resourceName(
                      model.name,
                    )}.primaryKey]: id }, data })`,
                  )
                })
                .write(',\n')
            })
          },
        },
      ],
    },
  ])

  file.addVariableStatement

  // Cleanup
  file.formatText({
    indentSize: 2,
    convertTabsToSpaces: true,
    semicolons: SemicolonPreference.Remove,
  })
}

/**
 * Generates an index file at the top-level output dir that re-exports everything.
 *
 * Also exports a `models` helper that contains a map of all ModelMetas.
 */
export const generateBarrelFile = (models: DMMF.Model[], file: SourceFile) => {
  models.forEach((model) => {
    file.addImportDeclarations([
      {
        namespaceImport: resourceName(model.name),
        moduleSpecifier: `./resources/${model.name.toLowerCase()}`,
      },
    ])
  })

  // Create a ModelMeta map & export it
  file.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    isExported: true,
    leadingTrivia: (writer) => writer.blankLineIfLastNot(),
    declarations: [
      {
        name: 'resources',
        initializer(writer) {
          writer
            .write('Object.freeze(')
            .inlineBlock(() => {
              writeArray(
                writer,
                models.map(({ name }) => `${name}: ${resourceName(name)},`),
              )
            })
            .write(')')
        },
      },
    ],
  })

  // Export a helper to determine if a model name is valid
  file.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    isExported: true,
    leadingTrivia: (writer) => writer.blankLineIfLastNot(),
    declarations: [
      {
        name: 'isValidResource',
        initializer: `(name: string): name is keyof typeof resources => name in resources`,
      },
    ],
  })

  file.formatText({
    indentSize: 2,
    convertTabsToSpaces: true,
    semicolons: SemicolonPreference.Remove,
  })
}
