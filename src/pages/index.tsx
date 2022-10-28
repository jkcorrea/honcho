import React from 'react'

import { TableLayout } from '~/components/TableLayout'

const IndexPage = () => {
  return (
    <TableLayout>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="opacity-30 text-4xl font-bold">Select a table</h1>
      </div>
    </TableLayout>
  )
}

export default IndexPage
