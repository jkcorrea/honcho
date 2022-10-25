import { useRouter } from 'next/router'

import { models } from '@honcho/generated'

import { AppLayout } from '~/components/AppLayout'
import ResourceTable from '~/components/ResourceTable'
import { TablePageQuerySchema } from '~/utils/helpers'
import { trpc } from '~/utils/trpc'

const TablePage = () => {
  const router = useRouter()
  const { model } = TablePageQuerySchema.parse(router.query)
  const { columns } = models[model]
  const { data } = trpc.table.all.useQuery({ model })

  return (
    <AppLayout>
      <ResourceTable data={data} columns={columns} />
    </AppLayout>
  )
}

export default TablePage
