import { useMemo } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { capitalCase } from 'change-case'
import { useRouter } from 'next/router'

import { resources } from '@honcho/generated'
import { AnyResource, ResourceColumn, ResourceColumns } from '@honcho/server'

import ResourceTable from '~/components/ResourceTable'
import { TableLayout } from '~/components/TableLayout'
import { TablePageQuerySchema } from '~/utils/helpers'
import { trpc } from '~/utils/trpc'

function transformColumns(cols: ResourceColumns<AnyResource>): ColumnDef<any>[] {
  return Object.entries(cols)
    .sort(
      ([_1, col1]: [string, ResourceColumn<any> | undefined], [_2, col2]: [string, ResourceColumn<any> | undefined]) =>
        (col1?.order ?? Infinity) - (col2?.order ?? Infinity),
    )
    .map(
      ([id, col]: [string, ResourceColumn<any> | undefined]): ColumnDef<any> => ({
        id,
        cell: col?.render,
        header: col?.title ?? capitalCase(id),
      }),
    )
}

const TablePage = () => {
  const router = useRouter()
  const { resource } = TablePageQuerySchema.parse(router.query)
  const res = resources[resource]
  const _cols = res.columns as ResourceColumns<AnyResource>
  const { data } = trpc.list.useQuery({ resource })

  const columns = useMemo(() => {
    return _cols ? transformColumns(_cols) : []
  }, [_cols])

  return (
    <TableLayout>
      <ResourceTable data={data} columns={columns} />
    </TableLayout>
  )
}

export default TablePage
