import type { AppType } from 'next/app'

import { trpc } from '../utils/trpc'

import '~/assets/styles/globals.css'

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default trpc.withTRPC(MyApp)
