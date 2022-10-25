import { z } from 'zod'

import { isValidModelName } from '@honcho/generated'

export const TablePageQuerySchema = z.object({ model: z.string().refine(isValidModelName) })
