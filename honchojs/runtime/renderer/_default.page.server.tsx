import React from 'react'
import { renderToStream } from 'react-streaming/server'
import { escapeInject } from 'vite-plugin-ssr'

import logoUrl from './logo.svg'
import { PageShell } from './PageShell'
import type { PageContextServer } from './types'

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['routeParams', 'pageProps', 'redirectTo']

async function render(pageContext: PageContextServer) {
  const { Page, pageProps, redirectTo } = pageContext

  if (redirectTo) return { documentHtml: null, pageContext: { redirectTo } }

  const stream = await renderToStream(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>,
  )

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports
  const title = (documentProps && documentProps.title) || 'Honcho.js'
  const desc = (documentProps && documentProps.description) || ''

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
      enableEagerStreaming: true,
    },
  }
}

export { render }
