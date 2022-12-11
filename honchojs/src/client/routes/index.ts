import { rootRoute } from './__root'

export const indexRoute = rootRoute.createRoute({
  path: '/',
  beforeLoad(opts) {
    opts.router.navigate({ to: '/t' })
  },
})
