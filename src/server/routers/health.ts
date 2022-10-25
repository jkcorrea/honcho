import { publicProcedure, router } from '../trpc'

export const healthRouter = router({
  healthz: publicProcedure.query(() => 'yay!'),
})
