import { createContext, useContext } from 'react'

import { useRouter } from 'next/router'

import { messages } from '~/translations'

interface LocaleContextData {
  t(key: string): string
}

export const LanguageContext = createContext<LocaleContextData>(
  {} as LocaleContextData
)

export const LanguageProvider: React.FC = ({ children }) => {
  const { locale } = useRouter()

  const t = (key: string) => {
    return locale ? messages[locale][key] : 'No translation found'
  }

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useTranslation = (): LocaleContextData => {
  const context = useContext(LanguageContext)

  return context
}
