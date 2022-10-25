import type { RowData } from '@tanstack/react-table'

declare global {
  type NextLayout = React.FC<{ children?: React.ReactNode }>
}

declare module '@tanstack/react-table' {
  // eslint-disable-next-line unused-imports/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    /** Class names applied to every cell in the column (th & td) */
    className?: string
    /** Class names applied to only header cells (th) */
    headerClassName?: string
    /** Class names applied to only data cells (td) */
    cellClassName?: string
  }
}
