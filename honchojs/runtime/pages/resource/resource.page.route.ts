import __honcho_resources from 'virtual:honcho'
import { resolveRoute } from 'vite-plugin-ssr/routing'

import { RESOURCE_PAGE_ROUTE } from '../../lib/constants'
import { PageContext } from '../../renderer/types'

export default (pageContext: PageContext) => {
  // Resolve the route given our pattern
  const result = resolveRoute(RESOURCE_PAGE_ROUTE, pageContext.urlPathname)
  // Check if the @id matches a valid resource
  if (result.match && Object.keys(__honcho_resources).includes(result.routeParams.id)) {
    return {
      ...result,
      precedence: 99,
    }
  }

  // TODO redirect to root? warn user resource DNE & to rebuild?
  return false
}
