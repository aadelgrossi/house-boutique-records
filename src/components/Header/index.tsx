import { FC } from 'react'

import Image from 'next/image'

import { LanguageSwitcher } from './LanguageSwitcher'
import { NavBar } from './NavBar'
import { Container } from './styles'

export const Header: FC = () => {
  return (
    <Container>
      <Image src="/logo.jpg" width="120" height="120" />
      <NavBar />
      <LanguageSwitcher />
    </Container>
  )
}
