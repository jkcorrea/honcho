import path from 'path'

import compress from '@fastify/compress'
import middie from '@fastify/middie'
import fastify, { FastifyPluginCallback } from 'fastify'
import qs from 'fastify-qs'
import { renderPage } from 'vite-plugin-ssr'

import { serverEnv } from '../framework/env'

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

  app.register(HonchoApi, { prefix: '/api/v0' })

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

const HonchoApi: FastifyPluginCallback = (instance, _opts, done) => {
  instance.register(qs, {})

  instance.addContentTypeParser('application/json', { parseAs: 'string' }, function (_, body, _done) {
    _done(null, body)
  })

  // instance.get('/resource', async (req, reply) => {
  //   req.query.test
  // })
  done()
}
