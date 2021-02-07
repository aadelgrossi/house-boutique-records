import { FC } from 'react'

import { ThemeProvider } from 'styled-components'

import { LanguageProvider } from '~/hooks/useTranslation'
import { theme } from '~/styles'

export const AppProvider: FC = ({ children }) => {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LanguageProvider>
  )
}
