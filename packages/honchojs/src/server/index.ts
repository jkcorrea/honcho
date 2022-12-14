import fastify, { FastifyPluginCallback } from 'fastify'

export async function startApiServer(port: number) {
  const app = fastify()

  app.register(HonchoApi, { prefix: '/api' })

  app.listen({ port })
  console.log(`Honcho API server running at http://localhost:${port}`)
}

const HonchoApi: FastifyPluginCallback = (instance, _opts, done) => {
  instance.addContentTypeParser('application/json', { parseAs: 'string' }, function (_, body, _done) {
    _done(null, body)
  })

  instance.get('/resource/:resourceId', async (req, reply) => {
    req.query.test
  })
  done()
}
