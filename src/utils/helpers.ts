import { z } from 'zod'

import { isValidResource } from '@honcho/generated'

export const TablePageQuerySchema = z.object({ resource: z.string().refine(isValidResource) })
