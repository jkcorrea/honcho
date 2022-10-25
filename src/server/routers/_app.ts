/**
 * This file contains the root router of your tRPC-backend
 */
import { router } from '../trpc'
import { healthRouter } from './health'
import { tableRouter } from './table'

export const appRouter = router({
  table: tableRouter,
  health: healthRouter,
})

export type AppRouter = typeof appRouter
