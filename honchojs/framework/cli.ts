import { cac } from 'cac'
import chokidar from 'chokidar'
import colors from 'picocolors'
import { createLogger } from 'vite'

import { buildMergedResources } from './cli/buildMergedResources'
import { GENERATED_RESOURCES_DIR, USER_RESOURCES_DIR } from './constants'
import { startServer } from './startServer'

const cli = cac('honcho')

interface GlobalOptions {}
interface DevServerOptions {}
interface BuildOptions {}

cli.command('dev', 'start dev server').action(async (_args: string, _options: DevServerOptions) => {
  try {
    startServer()
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
})

cli.help()
cli.parse()
