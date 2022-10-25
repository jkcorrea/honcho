import React from 'react'
import { Column, ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import clsx from 'clsx'

const getClassNameForCell = ({ columnDef: { meta } }: Column<any, any>, header = false) =>
  clsx(meta?.className, header ? meta?.headerClassName : meta?.cellClassName)

const showSkeleton = false

export interface ResourceTableProps {
  data?: any[] | null
  columns: ColumnDef<any>[]
}

const ResourceTable = ({ data, columns }: ResourceTableProps) => {
  const table = useReactTable<any>({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <table className="table flex-1 w-full">
      {/* head */}
      <thead>
        {table.getHeaderGroups().map((group) => (
          <tr key={group.id}>
            {group.headers.map((header) => (
              <th
                key={header.id}
                colSpan={header.colSpan}
                className={clsx('align-top sticky top-0', getClassNameForCell(header.column, true))}
              >
                {!header.isPlaceholder && flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="overflow-y-auto h-full">
        {showSkeleton
          ? Array.from([...Array(5)]).map((_, ix) => (
              <tr key={ix}>
                <td colSpan={columns.length} className="animate-pulse bg-transparent p-0 pb-3">
                  <div className="h-16 bg-gray-300" />
                </td>
              </tr>
            ))
          : table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id} className={clsx('group', row.getIsSelected() && 'active')}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td
                        key={cell.id}
                        className={clsx('group-hover:bg-primary/10 h-8', getClassNameForCell(cell.column))}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
      </tbody>
    </table>
  )
}

export default ResourceTable
