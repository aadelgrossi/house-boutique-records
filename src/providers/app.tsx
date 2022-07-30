import { ReactNode } from 'react'

import { ThemeProvider } from 'styled-components'

import { LanguageProvider } from '~/hooks'
import { theme } from '~/styles'

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LanguageProvider>
  )
}
