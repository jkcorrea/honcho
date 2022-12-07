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
    let apiPort: number
    try {
      apiPort = parseInt(process.env.API_PORT ?? '3000')
    } catch (e) {
      apiPort = 3000
    }

    startApiServer(apiPort)
    startClientServer()
    buildMergedResources()
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

async function startClientServer() {
  const server = await createServer({
    plugins: [honcho()],
    root: process.cwd(),
  })
  await server.listen()
  server.printUrls()
}
