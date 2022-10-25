import { join } from 'path'

import { program } from 'commander'
import fs from 'fs-extra'
import postgres, { Sql } from 'postgres'

import generateZodSchemas from './generators/zod-schemas'

const defaultOutDir = join(process.cwd(), 'src/generated')

program
  .argument('<DATABASE_URL>', 'The database to introspect')
  .option(
    '-o, --outdir <path>',
    'A directory to write to. **WARNING** will be overwritten if it already exists',
    defaultOutDir,
  )
  .option('-s, --schema <string>', 'The Postgres schema to introspect', 'public')

program.parse()

type OptionValues = {
  outdir: string
  schema: string
}

const opts = program.opts<OptionValues>()
const dbUrl = program.args[0]

if (!dbUrl) throw new Error('DATABASE_URL not found')

declare global {
  // eslint-disable-next-line no-var
  var sql: Sql
}

globalThis.sql = postgres(dbUrl)

async function main() {
  console.log(`Creating '${opts.outdir}'`)
  await fs.ensureDir(opts.outdir)
  console.log(`Generating Zod schemas...`)
  await generateZodSchemas(join(opts.outdir, 'schemas.ts'), { schema: opts.schema })
}

main().finally(() => {
  void sql.end()
})
