import { IdentifiedColumnDef } from '@tanstack/react-table'
import { inferProcedureOutput } from '@trpc/server'

import { resourceRouter } from '@honcho/generated/router'
import { router } from '@honcho/server'

import { healthRouter } from './health'

export const appRouter = router({
  health: healthRouter,
  resourceRouter,
})

export type AppRouter = typeof appRouter
export type ResourceRouter = typeof resourceRouter
export type ResourceRowOutputs = {
  [TKey in keyof ResourceRouter['_def']['record']]: inferProcedureOutput<
    ResourceRouter['_def']['record'][TKey]['findMany']
  >[number]
}
export type ResourceOverride<TKey extends keyof ResourceRowOutputs, TRowData = ResourceRowOutputs[TKey]> = {
  [TColKey in keyof TRowData]?: IdentifiedColumnDef<TRowData, TRowData[TColKey]>
}
export type HonchoConfig = {
  [TKey in keyof ResourceRowOutputs]?: ResourceOverride<TKey>
}

// type EventRow = inferRouterOutputs<AppRouter>['resourceRouter']['event']['findMany'][number]
