import { ColumnDef } from '@tanstack/react-table'
import { z } from 'zod'

import { Resource } from './resource'

export type AnyResource = Resource<any, any, any>

/** Infers the type for the primary key in given table */
export type inferPK<TResource extends AnyResource> = TResource['_z'][TResource['_cfg']['primaryKey']]

export type ResourceColumn<TData, TValue = unknown> = {
  render?: ColumnDef<TData, TValue>['cell']
  title?: string
}

export type ResourceColumns<TResource extends AnyResource> = {
  [K in keyof TResource['_z']]?: ResourceColumn<TResource['_z'], TResource['_z'][K]>
}

export type Resolvers<TResource extends AnyResource> = {
  list: () => Promise<TResource['_z'][]> | TResource['_z'][]
  show: (id: inferPK<TResource>) => Promise<TResource['_z']> | z.infer<TResource['_z']>
  update: (id: inferPK<TResource>, data: unknown) => Promise<void> | void
}
