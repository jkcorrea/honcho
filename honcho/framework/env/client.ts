import type { ZodFormattedError } from 'zod'

import { clientSchema } from './schema'

const _clientEnv = clientSchema.safeParse({ ...import.meta.env, NODE_ENV: process.env.NODE_ENV })

export const formatErrors = (errors: ZodFormattedError<Map<string, string>, string>) =>
  Object.entries(errors)
    .map(([name, value]) => {
      if (value && '_errors' in value) return `${name}: ${value._errors.join(', ')}\n`
    })
    .filter(Boolean)

if (!_clientEnv.success) {
  console.error('❌ Invalid environment variables:\n', ...formatErrors(_clientEnv.error.format()))
  throw new Error('Invalid environment variables')
}

for (const key of Object.keys(_clientEnv.data)) {
  if (!key.startsWith('VITE_') && key !== 'NODE_ENV') {
    console.warn('❌ Invalid public environment variable name:', key)
    throw new Error('Invalid public environment variable name')
  }
}

export const env = _clientEnv.data
