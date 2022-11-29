import ReactDOM from 'react-dom/client'

import { PageShell } from './PageShell'
import type { PageContext } from './types'

import '../assets/tailwind.css'

let root: any
async function render(pageContext: PageContext) {
  const { Page, pageProps, redirectTo } = pageContext

  if (redirectTo) {
    console.log('client', redirectTo)
    // navigate(redirectTo)
    return
  }

  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )
  const container = document.getElementById('page-view')!
  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page)
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container)
    }
    root.render(page)
  }
}

export { render }

export const clientRouting = true
export const hydrationCanBeAborted = true
/* To enable Client-side Routing:
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
