import { FC } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { navItems } from '~/constants'
import { useTranslation } from '~/hooks'

import { MenuItem } from './styles'

interface Props {
  toggleMobileMenu?(): void
}

export const MenuItems: FC<Props> = ({ toggleMobileMenu }) => {
  const { locale: activeLocale, asPath, route: activeRoute } = useRouter()
  const { t } = useTranslation()

  const isRouteActive = (route: string) =>
    route === '/'
      ? route === activeRoute
      : asPath.includes(route.replace('/', ''))

  return (
    <>
      {navItems.map(({ name, route }) => (
        <li key={name}>
          <Link href={route} locale={activeLocale}>
            <MenuItem onClick={toggleMobileMenu} active={isRouteActive(route)}>
              {t(`header_${name}`)}
            </MenuItem>
          </Link>
        </li>
      ))}
    </>
  )
}
