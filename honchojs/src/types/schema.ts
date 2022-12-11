import type { z } from 'zod'

export type AnyResourceSchema = z.infer<z.AnyZodObject>
