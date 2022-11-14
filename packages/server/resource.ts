import { ColumnDef } from '@tanstack/react-table'
import { capitalCase } from 'change-case'
import { z } from 'zod'

import { safeObject } from './internals/utils'

/** Configuration for a resource object */
export type ResourceMeta = {
  displayName?: string
  order?: number
}

export type ResourceColumn<TData, TValue = unknown> = {
  render?: ColumnDef<TData, TValue>['cell']
  title?: string
  order?: number
}

export type ResourceColumns<TResource extends AnyResource> = {
  [K in keyof TResource['_z']]?: ResourceColumn<TResource['_z'], TResource['_z'][K]>
}

/** Configuration for a column within a resource */
export type ColumnConfig = {
  order?: number
  visibility?: boolean | 'list' | 'show'
  isReadonly?: boolean
}

/** Maps resource keys (as defined by its schema) to column configs */
export type ColumnsConfigRecord<TSchema extends z.AnyZodObject> = { [K in keyof z.infer<TSchema>]?: ColumnConfig }

/**
 * A Resource is the basic building block in Honcho. Typically, it represents a SQL table and
 * carries schema & configuration data for resolvers & renderers to pull from.
 */
export class Resource<
  TSchema extends z.AnyZodObject,
  TPK extends keyof z.infer<TSchema>,
  TColumnsConfig extends ColumnsConfigRecord<TSchema>,
> {
  /** The database name for this table */
  readonly name: string
  /** A strict schema this resource follows */
  readonly schema: TSchema
  // NOTE: defining our config this way allows typescript to deeply introspect the values
  // when using the `.columns` helpers. This way we can later determine whether e.g. to
  // include a certain column in the cell override helper
  /** Column configs */
  readonly _cfg: {
    /** The name of the primary key for this table */
    primaryKey: TPK
    columns: TColumnsConfig
    meta: ResourceMeta
  }

  /** Helper for resolving the instance type for this model (applies `z.infer<>` to the schema). `undefined` at runtime. */
  readonly _z: z.infer<TSchema>

  constructor(
    name: string,
    schema: TSchema,
    _cfg?: { primaryKey?: TPK; displayName?: string; order?: number; columns?: TColumnsConfig },
  ) {
    this.name = name
    this.schema = schema
    this._cfg = {
      primaryKey: _cfg?.primaryKey ?? ('id' as TPK),
      columns: safeObject(_cfg?.columns) as TColumnsConfig,
      meta: {
        displayName: _cfg?.displayName ?? capitalCase(name),
        order: _cfg?.order,
      },
    }
  }

  get primaryKey() {
    return this._cfg.primaryKey
  }

  column<TColKey extends keyof ColumnsConfigRecord<TSchema>, TCol extends ColumnConfig>(
    name: TColKey,
    col: TCol,
  ): Resource<TSchema, TPK, Omit<ColumnsConfigRecord<TSchema>, TColKey> & Record<TColKey, typeof col>> {
    return new Resource(this.name, this.schema, {
      ...this._cfg,
      columns: { ...this._cfg.columns, [name]: col },
    })
  }

  columns<T extends ColumnsConfigRecord<TSchema>>(columns: T): Resource<TSchema, TPK, T> {
    return new Resource<any, any, any>(this.name, this.schema, { ...this._cfg, columns })
  }

  meta(meta: ResourceMeta) {
    this._cfg.meta = safeObject(this._cfg.meta, meta)
    return this
  }
}

export type AnyResource = Resource<any, any, any>
