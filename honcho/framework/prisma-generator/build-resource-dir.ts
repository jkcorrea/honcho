import { capitalCase } from 'change-case'
import { ImportDeclarationStructure, SourceFile, StructureKind, VariableDeclarationKind } from 'ts-morph'
import { SemicolonPreference } from 'typescript'

import { DMMF } from '@prisma/generator-helper'

import { getZodConstructor, resourceName, schemaTypeName } from './util'

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
      namedImports: ['prisma'],
      moduleSpecifier: '@honcho/server',
    },
    {
      kind: StructureKind.ImportDeclaration,
      namedImports: ['ResourceResolvers', 'ResourceColumns'],
      moduleSpecifier: '@honcho/types',
    },
  ]

  const enumFields = [...new Set(model.fields.filter((f) => f.kind === 'enum'))]
  if (enumFields.length > 0) {
    importList.push({
      kind: StructureKind.ImportDeclaration,
      isTypeOnly: enumFields.length === 0,
      moduleSpecifier: '@prisma/client',
      namedImports: [...new Set(enumFields.map((f) => f.type))],
    })
  }

  if (model.fields.some((f) => f.type === 'Json')) {
    importList.push({
      kind: StructureKind.ImportDeclaration,
      namedImports: ['JsonSchema'],
      moduleSpecifier: '@honcho/internal',
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
        name: 'schema',
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
    type: `z.infer<typeof schema>`,
    isExported: true,
  })
  // #endregion

  file.addVariableStatements([
    // Columns
    {
      declarationKind: VariableDeclarationKind.Const,
      isExported: true,
      leadingTrivia: (w) => w.blankLineIfLastNot(),
      declarations: [
        {
          name: 'columns',
          type: `ResourceColumns<${schemaTypeName(model.name)}>`,
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
    {
      declarationKind: VariableDeclarationKind.Const,
      leadingTrivia: (w) => w.blankLineIfLastNot(),
      declarations: [
        {
          name: 'primaryKey',
          initializer(writer) {
            writer.write(`'${model.primaryKey ?? 'id'}' as const`)
          },
        },
      ],
    },
    // Resolvers
    {
      declarationKind: VariableDeclarationKind.Const,
      isExported: true,
      declarations: [
        {
          name: 'resolvers',
          type: `ResourceResolvers<${schemaTypeName(model.name)}, typeof primaryKey>`,
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
                  writer.writeLine(`return prisma.${model.name}.findUniqueOrThrow({ where: { [primaryKey]: id } })`)
                })
                .write(',\n')
              writer
                .write(`async update(id, _data) `)
                .inlineBlock(() => {
                  writer.writeLine(`const data = schema.parse(_data)`)
                  writer.writeLine(`await prisma.${model.name}.update({ where: { [primaryKey]: id }, data })`)
                })
                .write(',\n')
            })
          },
        },
      ],
    },
  ])

  // Cleanup
  file.formatText({
    indentSize: 2,
    convertTabsToSpaces: true,
    semicolons: SemicolonPreference.Remove,
  })
}

export const generateResourcesIndex = (models: DMMF.Model[], file: SourceFile) => {
  models.forEach((model) => {
    file.addExportDeclaration({
      namespaceExport: resourceName(model.name),
      moduleSpecifier: `./${model.name.toLowerCase()}`,
    })
  })

  file.formatText({
    indentSize: 2,
    convertTabsToSpaces: true,
    semicolons: SemicolonPreference.Remove,
  })
}
