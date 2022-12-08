import * as React from 'react'
import { createReactRouter } from '@tanstack/react-router'

import { Spinner } from './components/Spinner'
import { rootRoute } from './routes/__root'
import { tableRoute } from './routes/table'
import { resourceTableRoute } from './routes/table/resource'
import { indexRoute } from './routes'

const routeConfig = rootRoute.addChildren([indexRoute, tableRoute.addChildren([resourceTableRoute])])

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
