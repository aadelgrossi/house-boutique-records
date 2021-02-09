import { FC } from 'react'
import 'react-multi-carousel/lib/styles.css'
import '../styles/rhap.css'

import { AppProps } from 'next/app'
import Head from 'next/head'

import { Layout, AudioPlayer } from '~/components'
import { PlayerProvider } from '~/hooks'
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

        <PlayerProvider>
          <Component {...pageProps} />
          <AudioPlayer />
        </PlayerProvider>
        <GlobalStyle />
      </Layout>
    </AppProvider>
  )
}

export default MyApp
