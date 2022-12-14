import { spawn } from 'child_process'

import { Command } from '@oclif/core'

// interface SyncFlags extends Interfaces.FlagOutput {}
// interface SyncArgs {}

export default class Sync extends Command {
  static description = 'Introspects your database and pulls the corresponding tables & types into Honcho.'

  static flags = {}

  static args = []

  async run(): Promise<void> {
    await runPrismaIntrospect()
  }
}

async function runPrismaIntrospect() {
  return new Promise<number | null>((resolve, reject) => {
    const prismaIntrospect = spawn('npx', ['prisma', 'db', 'pull'], {
      stdio: 'inherit',
    })
    prismaIntrospect.on('close', (code) => {
      // console.log(`child process exited with code ${code}`)
      resolve(code)
    })
    prismaIntrospect.on('error', (err) => {
      // console.error(`child process error: ${err}`)
      reject(err)
    })
  })
}
