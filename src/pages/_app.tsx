import type { AppType } from 'next/app'

import Navbar from '~/components/Navbar'

import { trpc } from '../utils/trpc'

import '~/assets/styles/globals.css'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="relative flex flex-col w-full h-screen">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default trpc.withTRPC(MyApp)
