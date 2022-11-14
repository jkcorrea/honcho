import { resources } from '@honcho/generated'
import { resourceProcedure, router } from '@honcho/server'

import { TablePageQuerySchema } from '~/utils/helpers'

import { healthRouter } from './health'

export const appRouter = router({
  health: healthRouter,
  list: resourceProcedure.input(TablePageQuerySchema).query(async ({ input: { resource } }) => {
    return resources[resource].resolvers.list()
  }),
})

export type AppRouter = typeof appRouter

// type EventRow = inferRouterOutputs<AppRouter>['resourceRouter']['event']['findMany'][number]
