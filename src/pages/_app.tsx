import { FC } from 'react'

import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { Layout } from '~/components'
import { GlobalStyle, theme } from '~/styles'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

export default MyApp
