import type { ColumnDef } from '@tanstack/react-table'
import type { z } from 'zod'

export type AnyResourceSchema = z.infer<z.AnyZodObject>

// #region Columns
export type ResourceColDef<TData, TValue = unknown> = {
  render?: ColumnDef<TData, TValue>['cell']
  title?: string
  order?: number
  isReadonly?: boolean
  visibility?: boolean | 'list' | 'show'
}

export type ResourceColumns<TResource extends AnyResourceSchema> = {
  [K in keyof TResource]?: ResourceColDef<TResource, TResource[K]>
}

export type AnyResourceColumns = ResourceColumns<AnyResourceSchema>
// #endregion Columns

// #region Resolvers
export type ResourceResolvers<TResource extends AnyResourceSchema, TPK extends keyof TResource> = {
  list: () => Promise<TResource[]> | TResource[]
  show: (id: TResource[TPK]) => Promise<TResource> | TResource
  update: (id: TResource[TPK], data: Partial<TResource>) => Promise<void> | void
}

export type AnyResourceResolvers = ResourceResolvers<AnyResourceSchema, any>
// #endregion Resolvers

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
