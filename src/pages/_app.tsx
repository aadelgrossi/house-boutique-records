import '../styles/global.css'
import { FC } from 'react'

import { AppProps } from 'next/app'
import Head from 'next/head'

import { Layout } from '~/components'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <title>Next.js Starter Tailwind</title>
        <meta
          name="Description"
          content="A Next.js starter styled using Tailwind CSS."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
