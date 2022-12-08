import __honcho_resources from 'virtual:honcho'

import { TableLayout } from '../../components/TableLayout'
import { rootRoute } from '../__root'

export const tableRoute = rootRoute.createRoute({
  path: `/`,
  component: Table,
})

function Table() {
  return (
    <TableLayout resources={Object.keys(__honcho_resources)}>
      <h1>Select a table</h1>
    </TableLayout>
  )
}
