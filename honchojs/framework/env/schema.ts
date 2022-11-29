import { z } from 'zod'

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.number().positive().default(3000),
  DATABASE_URL: z.string(),
})

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `VITE_`.
 */
export const clientSchema = z.object({
  // NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  // VITE_FOO: z.string(),
})
