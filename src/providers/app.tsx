import { ReactNode } from 'react'

import { ThemeProvider } from 'styled-components'

import { LanguageProvider } from '~/hooks'
import { theme } from '~/styles'

import { ApolloProvider } from './apollo'

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <ApolloProvider>{children}</ApolloProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}
