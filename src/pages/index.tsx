import React from 'react'

import { AppLayout } from '~/components/AppLayout'

const IndexPage = () => {
  return (
    <AppLayout>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="opacity-30 text-4xl font-bold">Select a table</h1>
      </div>
    </AppLayout>
  )
}

export default IndexPage
