import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { locales } from '~/constants'

import { Container, MenuItem } from './styles'

interface Props {
  close?(): void
}

export const LanguageSwitcher: React.FC<Props> = ({ close }) => {
  const { locale: activeLocale, asPath } = useRouter()

  return (
    <Container>
      {locales.map(({ label, locale }) => (
        <li key={locale}>
          <Link href={asPath} locale={locale} passHref>
            <MenuItem active={locale === activeLocale} onClick={close}>
              {label}
            </MenuItem>
          </Link>
        </li>
      ))}
    </Container>
  )
}
