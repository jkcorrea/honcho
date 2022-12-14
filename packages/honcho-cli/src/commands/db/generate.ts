import { spawn } from 'child_process'

import { Command } from '@oclif/core'

// interface GenerateFlags extends Interfaces.FlagOutput {}
// interface GenerateArgs {}

export default class Generate extends Command {
  static description = 'Generate base schemas, resolvers, and columns for your database.'

  static flags = {}

  static args = []

  async run(): Promise<void> {
    await runPrismaGenerate()
  }
}

async function runPrismaGenerate() {
  return new Promise<number | null>((resolve, reject) => {
    const prismaIntrospect = spawn('npx', ['prisma', 'generate'], {
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
