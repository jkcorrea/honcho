import type { ColumnDef } from '@tanstack/react-table'

import type { AnyResourceSchema } from './schema'

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
