import type { AnyResourceSchema } from './schema'

export type ResourceResolvers<TResource extends AnyResourceSchema, TPK extends keyof TResource> = {
  list: () => Promise<TResource[]> | TResource[]
  show: (id: TResource[TPK]) => Promise<TResource> | TResource
  update: (id: TResource[TPK], data: Partial<TResource>) => Promise<void> | void
}

export type AnyResourceResolvers = ResourceResolvers<AnyResourceSchema, any>
