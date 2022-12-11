import { createRouteConfig, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { Spinner } from '../components/Spinner'
import { router } from '../router'

export const rootRoute = createRouteConfig({
  component: () => {
    const routerState = router.useState()

    return (
      <>
        <div className={`flex min-h-screen flex-col`}>
          <div className={`flex items-center gap-2 border-b`}>
            <h1 className={`p-2 text-3xl`}>Honcho.js</h1>
            {/* Show a global spinner when the router is transitioning */}
            <div
              className={`delay-0 text-3xl opacity-0 duration-300 ${
                routerState.status === 'loading' || routerState.isFetching ? ` opacity-40 duration-1000` : ''
              }`}
            >
              <Spinner />
            </div>
          </div>
          <div className={`flex flex-1`}>
            <div className={`flex-1 border-l border-gray-200`}>
              {/* Render our first route match */}
              <Outlet />
            </div>
          </div>
        </div>
        <TanStackRouterDevtools position="bottom-right" />
      </>
    )
  },
})
