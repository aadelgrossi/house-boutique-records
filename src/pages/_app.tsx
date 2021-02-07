import { FC } from 'react'
import 'react-multi-carousel/lib/styles.css'

import { AppProps } from 'next/app'
import Head from 'next/head'

import { Layout } from '~/components'
import { AppProvider } from '~/providers/app'
import { GlobalStyle } from '~/styles'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Layout>
        <Head>
          <title>House Boutique Records</title>
          <meta
            name="Description"
            content="Official website for House Boutique Records"
          />
        </Head>

        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    </AppProvider>
  )
}

export default MyApp
