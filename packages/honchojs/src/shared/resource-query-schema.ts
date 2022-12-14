import { z } from 'zod'

export const ResourceSort = z.object({
  field: z.string(),
  order: z.enum(['asc', 'desc']),
  nulls: z.enum(['first', 'last']).default('first'),
})

const ScalarType = z.union([z.number(), z.string(), z.boolean(), z.undefined(), z.null()])

const ScalarOp = z.object({
  op: z.enum(['eq', 'gt', 'gte', 'lt', 'lte', 'neq', 'is']),
  field: z.string(),
  value: ScalarType,
})

const CustomOp = z.object({
  op: z.literal('custom'),
  key: z.string(),
  value: ScalarType,
})

type LogicalOp = {
  op: 'and' | 'or'
  left: ResourceFilter
  right: ResourceFilter
}
const LogicalOp: z.ZodType<LogicalOp> = z.lazy(() =>
  z.object({
    op: z.enum(['and', 'or']),
    left: ResourceFilter,
    right: ResourceFilter,
  }),
)

type NegationOp = {
  op: 'not'
  condition: ResourceFilter
}
const NegationOp: z.ZodType<NegationOp> = z.lazy(() =>
  z.object({
    op: z.literal('not'),
    condition: ResourceFilter,
  }),
)

type ResourceFilter =
  | z.infer<typeof ScalarOp>
  | z.infer<typeof CustomOp>
  | z.infer<typeof LogicalOp>
  | z.infer<typeof NegationOp>
export const ResourceFilter: z.ZodType<ResourceFilter> = z.lazy(() =>
  z.union([ScalarOp, CustomOp, LogicalOp, NegationOp]),
)
