import path from 'path'

import compress from '@fastify/compress'
import middie from '@fastify/middie'
import fastify from 'fastify'
import { telefunc } from 'telefunc'
import { renderPage } from 'vite-plugin-ssr'

import { serverEnv } from './env'

const isProduction = process.env.NODE_ENV === 'production'
const root = process.cwd()

export async function startServer() {
  const app = fastify()

  await app.register(middie)
  await app.register(compress)

  if (isProduction) {
    const fastifyStatic = await import('@fastify/static')
    app.register(fastifyStatic, {
      root: path.join(root, '/dist/client/assets'),
      prefix: '/assets/',
    })
  } else {
    const vite = await import('vite')
    const viteServer = await vite.createServer({
      root,
      server: { middlewareMode: true },
    })
    await app.use(viteServer.middlewares)
  }

  app.all('/_telefunc', async (req, reply) => {
    const httpResponse = await telefunc({ url: req.url, method: req.method, body: req.body as string })
    const { body: resBody, statusCode, contentType } = httpResponse
    reply.status(statusCode).type(contentType).send(resBody)
  })

  app.get('*', async (req, reply) => {
    const pageContextInit = {
      urlOriginal: req.url,
    }
    const pageContext = await renderPage<{ redirectTo?: string }, Record<string, unknown>>(pageContextInit)

    // Handle page redirects
    if (pageContext.redirectTo) return reply.type('application/json').redirect(307, pageContext.redirectTo)

    const { httpResponse } = pageContext
    if (!httpResponse) return reply.code(404).type('text/html').send('Not Found')

    httpResponse.pipe(reply.raw)
  })

  const port = serverEnv.PORT
  app.listen({ port })
  console.log(`Server running at http://localhost:${port}`)
}
