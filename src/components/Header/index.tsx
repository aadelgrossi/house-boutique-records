import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { locales } from '~/constants'

import NavBar from '../NavBar'
import { Container, LocaleSwitcher, MenuItem } from './styles'

export const Header: FC = () => {
  const { locale: activeLocale, asPath, route: activeRoute } = useRouter()

  console.log({ activeRoute })

  return (
    <Container>
      <Image src="/logo.jpg" width="120" height="120" />

      <NavBar />

      <LocaleSwitcher>
        {locales.map(({ label, locale }) => (
          <li key={locale}>
            <Link href={asPath} locale={locale}>
              <MenuItem active={locale === activeLocale}>{label}</MenuItem>
            </Link>
          </li>
        ))}
      </LocaleSwitcher>
    </Container>
  )
}
