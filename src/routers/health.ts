import { resourceProcedure, router } from '@honcho/server'

export const healthRouter = router({
  healthz: resourceProcedure.query(() => 'yay!'),
})
