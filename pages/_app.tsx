import 'react-multi-carousel/lib/styles.css'
import '../src/styles/rhap.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { AppProps } from 'next/app'

import { Layout, AudioPlayer } from '~/components'
import { PlayerProvider } from '~/hooks'
import { AppProvider } from '~/providers/app'
import { GlobalStyle } from '~/styles'

const MyApp = ({ Component, pageProps }: AppProps) => {
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
