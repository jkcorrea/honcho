import { CellContext, ColumnDefTemplate } from '@tanstack/react-table'

export const renderDefault: ColumnDefTemplate<CellContext<any, any>> = (ctx) => {
  const v = ctx.getValue()
  return typeof v === 'object' ? JSON.stringify(v) : v
}
export const renderDate: ColumnDefTemplate<CellContext<any, Date>> = (ctx) => {
  const v = ctx.getValue()
  return <span>{Array.isArray(v) ? `[${v.map((d) => d.toISOString()).join(', ')}]` : v?.toISOString()}</span>
}
