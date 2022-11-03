import { useRouter } from 'next/router'

import { models } from '@honcho/generated'

import ResourceTable from '~/components/ResourceTable'
import { TableLayout } from '~/components/TableLayout'
import honchoConfig from '~/honcho.config'
import { TablePageQuerySchema } from '~/utils/helpers'
import { trpc } from '~/utils/trpc'

const TablePage = () => {
  const router = useRouter()
  const { model } = TablePageQuerySchema.parse(router.query)
  const overrideCols = honchoConfig[model]
  const { columns: defaultCols } = models[model]
  const columns = Object.entries({ ...defaultCols, ...overrideCols }).map(([id, col]) => ({
    ...col,
    accessorKey: id,
    id,
  }))
  const { data } = trpc.resourceRouter[model].findMany.useQuery()

  return (
    <TableLayout>
      <ResourceTable data={data} columns={columns} />
    </TableLayout>
  )
}

export default TablePage
