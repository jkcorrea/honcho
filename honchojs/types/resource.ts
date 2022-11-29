import type { z } from 'zod'

import type { ResourceColumns } from './column'
import type { ResourceResolvers } from './resolver'
import type { AnyResourceSchema } from './schema'

export type HonchoResource<TSchema extends AnyResourceSchema> = {
  schema: z.ZodObject<any, any, any, TSchema>
  columns: ResourceColumns<TSchema>
  resolvers: ResourceResolvers<TSchema, any>
}

export type AnyHonchoResource = {
  schema: z.ZodObject<any, any, any, AnyResourceSchema>
  columns: ResourceColumns<AnyResourceSchema>
  resolvers: ResourceResolvers<AnyResourceSchema, any>
}
