import { FC, useEffect, useState } from 'react'

import Image from 'next/image'

import { debounce } from '~/utils/debounce'

import { LanguageSwitcher } from './LanguageSwitcher'
import { NavBar } from './NavBar'
import { Container, Content } from './styles'

export const Header: FC = () => {
  const [atTop, setAtTop] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 90) ||
        currentScrollPos < 250
    )

    setAtTop(currentScrollPos < 400)

    setPrevScrollPos(currentScrollPos)
  }, 25)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, visible, handleScroll])

  return (
    <Container
      style={{
        top: visible ? '0' : '-180px',
        backgroundColor: atTop ? 'transparent' : '#111214'
      }}
    >
      <Content>
        <Image src="/logo.jpg" width="130" height="130" />
        <NavBar />
        <LanguageSwitcher />
      </Content>
    </Container>
  )
}
