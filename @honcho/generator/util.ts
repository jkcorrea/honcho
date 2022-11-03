import { capitalCase, pascalCase } from 'change-case'
import type { CodeBlockWriter } from 'ts-morph'

import { DMMF } from '@prisma/generator-helper'

export const writeArray = (writer: CodeBlockWriter, array: string[], newLine = true) =>
  array.forEach((line) => writer.write(line).conditionalNewLine(newLine))

export const metaName = (name: string) => `${pascalCase(name)}Meta`
export const humanName = (name: string) => capitalCase(name)
export const schemaName = (name: string) => `${pascalCase(name)}Schema`
export const unrelatedSchemaName = (name: string) => `__${schemaName(name)}`
export const schemaTypeName = (name: string) => `T${schemaName(name)}`
export const unrelatedSchemaTypeName = (name: string) => `__${schemaTypeName(name)}`
export const columnsName = (name: string) => `${pascalCase(name)}Columns`
export const routerName = (name: string) => `${pascalCase(name)}Router`

export const chunk = <T extends any[]>(input: T, size: number): T[] => {
  return input.reduce(
    (acc: T[], item, idx) =>
      idx % size === 0 ? [...acc, [item]] : [...acc.slice(0, -1), [...(acc.slice(-1)[0] as T), item]],
    [],
  ) as T[]
}

export const resolveImportPath = (input: string): string => {
  const converted = input
    .replace(/^\\\\\?\\/, '')
    .replace(/\\/g, '/')
    .replace(/\/\/+/g, '/')

  if (converted.includes(`/node_modules/`)) return converted.split(`/node_modules/`).slice(-1)[0] as string

  if (converted.startsWith(`../`)) return converted

  return './' + converted
}

export const getZodConstructor = (field: DMMF.Field) => {
  let zodType = 'z.unknown()'
  const extraModifiers: string[] = ['']
  if (field.kind === 'scalar') {
    switch (field.type) {
      case 'String':
        zodType = 'z.string()'
        break
      case 'Int':
        zodType = 'z.number()'
        extraModifiers.push('int()')
        break
      case 'BigInt':
        zodType = 'z.bigint()'
        break
      case 'DateTime':
        zodType = 'z.date()'
        break
      case 'Float':
        zodType = 'z.number()'
        break
      case 'Decimal':
        zodType = 'z.number()'
        break
      case 'Json':
        zodType = 'JsonSchema'
        break
      case 'Boolean':
        zodType = 'z.boolean()'
        break
      // TODO: Proper type for bytes fields
      case 'Bytes':
        zodType = 'z.unknown()'
        break
    }
  } else if (field.kind === 'enum') {
    zodType = `z.nativeEnum(${field.type})`
  } else if (field.kind === 'object') {
    zodType = schemaName(field.type)
  }

  if (field.isList) extraModifiers.push('array()')
  if (field.documentation) {
    // TODO do we need to use this?
    // zodType = computeCustomSchema(field.documentation) ?? zodType
    // extraModifiers.push(...computeModifiers(field.documentation))
  }
  if (!field.isRequired && field.type !== 'Json') extraModifiers.push('nullish()')
  // if (field.hasDefaultValue) extraModifiers.push('optional()')

  return `${zodType}${extraModifiers.join('.')}`
}

export const getCellRenderer = (field: DMMF.Field) => {
  let renderer = 'undefined'

  switch (field.type) {
    case 'DateTime':
      renderer = 'cells.renderDate'
      break
    case 'String':
    case 'Int':
    case 'BigInt':
    case 'Float':
    case 'Decimal':
    case 'Boolean':
    case 'Json':
    case 'Bytes':
      renderer = 'cells.renderDefault'
  }

  return renderer
  // } else if (field.kind === 'enum') {
  // } else if (field.kind === 'object') {
  // if (field.isList) extraModifiers.push('array()')
  // if (!field.isRequired && field.type !== 'Json') extraModifiers.push('nullish()')
  // if (field.hasDefaultValue) extraModifiers.push('optional()')
}
