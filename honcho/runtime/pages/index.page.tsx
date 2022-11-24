import __honcho_resources from 'virtual:honcho'

import { TableLayout } from '~/honcho/runtime/components/TableLayout'

export { Page }

function Page() {
  return (
    <TableLayout resources={Object.keys(__honcho_resources)}>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="opacity-30 text-4xl font-bold">Select a table</h1>
      </div>
    </TableLayout>
  )
}
