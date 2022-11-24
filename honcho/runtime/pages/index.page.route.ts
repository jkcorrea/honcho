import { resolveRoute } from 'vite-plugin-ssr/routing'

import { RESOURCE_PAGE_ROUTE } from '~/honcho/runtime/lib/constants'
import { PageContext } from '~/honcho/runtime/renderer/types'

export default ({ urlPathname }: PageContext) => {
  const asResourceRoute = resolveRoute(RESOURCE_PAGE_ROUTE, urlPathname)
  if (asResourceRoute.match) {
    // TODO warn user they tried to navigate to a resource that doesnt exist
    return {
      precedence: 0,
    }
  }

  return resolveRoute('/', urlPathname)
}
