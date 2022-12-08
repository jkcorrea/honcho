import chokidar from 'chokidar'
import colors from 'picocolors'
import { createLogger, createServer } from 'vite'

import { startApiServer } from '../../server'
import { GENERATED_RESOURCES_DIR, USER_RESOURCES_DIR } from '../constants'
import honcho from '../vite-plugin'
import { buildMergedResources } from './build-merged-resources'

export interface DevServerOptions {}

export default async function dev(_args: string, _options: DevServerOptions) {
  try {
    const clientPort: number = parseInt(process.env.PORT ?? '3000')
    const apiPort: number = parseInt(process.env.API_PORT ?? '3001')

    await buildMergedResources()
    startApiServer(apiPort)
    startClientServer(clientPort)
  } catch (e) {
    let errMsg = 'error when starting dev server:\n'
    if (e instanceof Error) errMsg += e.stack
    else errMsg += `${e}`
    createLogger().error(colors.red(errMsg), { error: e as any })
  }

  const watcher = chokidar.watch([GENERATED_RESOURCES_DIR, USER_RESOURCES_DIR], {
    depth: 0,
    persistent: true,
    ignoreInitial: true,
  })
  watcher.on('all', (eventName, file) => {
    console.log(`${eventName}: ${file}`)
    if (eventName === 'add' || eventName === 'change' || eventName === 'unlink') {
      buildMergedResources()
    }
  })
}

async function startClientServer(port: number) {
  const server = await createServer({
    plugins: [honcho()],
    root: process.cwd(),
    server: { port },
  })
  await server.listen()
  server.printUrls()
}
