import React, { Suspense } from 'react'

import AppBar from '../components/AppBar'
import { PageContextProvider } from '../lib/usePageContext'
import type { PageContext } from './types'

export { PageShell }

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <PageContextProvider pageContext={pageContext}>
          <div className="relative flex flex-col w-full h-screen">
            <AppBar />
            {children}
          </div>
        </PageContextProvider>
      </Suspense>
    </React.StrictMode>
  )
}
