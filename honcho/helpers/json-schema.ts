import { z } from 'zod'

import type { Prisma } from '@prisma/client'

const literalSchema = z.union([z.string(), z.number(), z.boolean()])
export const JsonSchema: z.ZodSchema<Prisma.JsonValue | Prisma.JsonValue> = z.lazy(() =>
  z.union([literalSchema, z.array(JsonSchema), z.record(JsonSchema)]),
)
