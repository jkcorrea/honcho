import { z } from 'zod'

import { AnyResource } from './resource'

/** Infers the type for the primary key in given table */
export type inferPK<TResource extends AnyResource> = TResource['_z'][TResource['_cfg']['primaryKey']]

export type Resolvers<TResource extends AnyResource> = {
  list: () => Promise<TResource['_z'][]> | TResource['_z'][]
  show: (id: inferPK<TResource>) => Promise<TResource['_z']> | z.infer<TResource['_z']>
  update: (id: inferPK<TResource>, data: unknown) => Promise<void> | void
}
