import { tableLayoutRoute } from './__layout'

export const resourceTableIndexRoute = tableLayoutRoute.createRoute({
  path: `/`,
  component: Table,
})

function Table() {
  return <h1>Select a table</h1>
}
