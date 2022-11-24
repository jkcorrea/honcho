import dotenv from 'dotenv'

import { env as clientEnv, formatErrors } from './client'
import { serverSchema } from './schema'

dotenv.config()
const _serverEnv = serverSchema.safeParse(process.env)

if (!_serverEnv.success) {
  console.error('❌ Invalid environment variables:\n', ...formatErrors(_serverEnv.error.format()))
  throw new Error('Invalid environment variables')
}

for (const key of Object.keys(_serverEnv.data)) {
  if (key.startsWith('VITE_')) {
    console.warn('❌ You are exposing a server-side env-variable:', key)
    throw new Error('You are exposing a server-side env-variable')
  }
}

export const env = { ...clientEnv, ..._serverEnv.data }
