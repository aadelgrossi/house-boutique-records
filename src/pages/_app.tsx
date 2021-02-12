import { FC } from 'react'
import 'react-multi-carousel/lib/styles.css'
import '../styles/rhap.css'

import { AppProps } from 'next/app'

import { Layout, AudioPlayer } from '~/components'
import { PlayerProvider } from '~/hooks'
import { AppProvider } from '~/providers/app'
import { GlobalStyle } from '~/styles'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <AppProvider>
        <GlobalStyle />

        <Layout>
          <PlayerProvider>
            <Component {...pageProps} />
            <AudioPlayer />
          </PlayerProvider>
        </Layout>
      </AppProvider>
    </>
  )
}

export default MyApp
