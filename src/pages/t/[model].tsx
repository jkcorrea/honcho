import { useRouter } from 'next/router'

import { models } from '@honcho/generated'

import ResourceTable from '~/components/ResourceTable'
import { TableLayout } from '~/components/TableLayout'
import { TablePageQuerySchema } from '~/utils/helpers'
import { trpc } from '~/utils/trpc'

const TablePage = () => {
  const router = useRouter()
  const { model } = TablePageQuerySchema.parse(router.query)
  const { columns } = models[model]
  const { data } = trpc.table.all.useQuery({ model })

  return (
    <TableLayout>
      <ResourceTable data={data} columns={columns} />
    </TableLayout>
  )
}

export default TablePage
