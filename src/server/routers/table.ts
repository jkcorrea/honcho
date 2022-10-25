/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */
import { z } from 'zod'

import { isValidModelName } from '@honcho/generated'

import { publicProcedure, router } from '../trpc'

export const tableRouter = router({
  all: publicProcedure
    .input(z.object({ model: z.string().refine(isValidModelName) }))
    .query(async ({ ctx, input: { model } }) => {
      const prismaModel = ctx.prisma[model] as any
      if (!model) throw new Error(`Unrecognized model name: "${model}"`)
      return prismaModel.findMany()
    }),
})
