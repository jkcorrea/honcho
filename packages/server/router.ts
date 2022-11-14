import { AnyRouter, initTRPC } from '@trpc/server'
import * as trpc from '@trpc/server'
import * as trpcNext from '@trpc/server/adapters/next'
import { createNextApiHandler } from '@trpc/server/adapters/next'
import superjson from 'superjson'

import { prisma } from './db'

interface CreateContextOptions {}

export function createContextInner(_opts: CreateContextOptions) {
  return {
    prisma,
  }
}

export type HonchoRouterContext = trpc.inferAsyncReturnType<typeof createContextInner>

export function createContext(
  _opts: trpcNext.CreateNextContextOptions,
): Promise<HonchoRouterContext> | HonchoRouterContext {
  // for API-response caching see https://trpc.io/docs/caching

  return createContextInner({})
}

const t = initTRPC.context<HonchoRouterContext>().create({
  /**
   * @see https://trpc.io/docs/v10/data-transformers
   */
  transformer: superjson,
  /**
   * @see https://trpc.io/docs/v10/error-formatting
   */
  errorFormatter({ shape }) {
    return shape
  },
})

export const router = t.router

export const resourceProcedure = t.procedure
export const middleware = t.middleware
export const mergeRouters = t.mergeRouters

export const createHonchoRouter = <TRouter extends AnyRouter>(router: TRouter) =>
  createNextApiHandler({
    router,
    createContext,
    onError({ error }) {
      if (error.code === 'INTERNAL_SERVER_ERROR') {
        // send to bug reporting
        console.error('Something went wrong', error)
      }
    },
    batching: {
      enabled: true,
    },
  })
