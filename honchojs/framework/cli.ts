import { cac } from 'cac'

import dev from './cli/dev'

const cli = cac('honcho')

interface GlobalOptions {}
interface BuildOptions {}

cli.command('dev', 'start dev server').action(dev)

cli.help()
cli.parse()
