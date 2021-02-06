import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { navItems, locales } from '~/constants'
import { useTranslation } from '~/hooks/useTranslation'

import { Container, Navbar, LocaleSwitcher, Menu, MenuItem } from './styles'

export const Header: FC = () => {
  const { locale: activeLocale, asPath, route: activeRoute } = useRouter()
  const { t } = useTranslation()

  console.log({ activeRoute })

  const isRouteActive = (route: string) =>
    route === '/'
      ? route === activeRoute
      : asPath.includes(route.replace('/', ''))

  return (
    <Container>
      <Image src="/logo.jpg" width="120" height="120" />

      <Navbar>
        <Menu>
          {navItems.map(({ name, route }) => (
            <li key={name}>
              <Link href={route} locale={activeLocale}>
                <MenuItem active={isRouteActive(route)}>
                  {t(`header_${name}`)}
                </MenuItem>
              </Link>
            </li>
          ))}
        </Menu>
      </Navbar>

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
