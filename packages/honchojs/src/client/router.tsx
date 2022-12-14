import * as React from 'react'
import { createReactRouter } from '@tanstack/react-router'

import { Spinner } from './components/Spinner'
import { rootRoute } from './routes/__root'
import { resourceTableIndexRoute } from './routes/table'
import { tableLayoutRoute } from './routes/table/__layout'
import { resourceTableRoute } from './routes/table/resource'

const routeConfig = rootRoute.addChildren([
  //
  // indexRoute,
  tableLayoutRoute.addChildren([resourceTableIndexRoute, resourceTableRoute]),
])

export const router = createReactRouter({
  routeConfig,
  defaultPendingComponent: () => (
    <div className={`p-2 text-2xl`}>
      <Spinner />
    </div>
  ),
})

declare module '@tanstack/react-router' {
  interface RegisterRouter {
    router: typeof router
  }
}
