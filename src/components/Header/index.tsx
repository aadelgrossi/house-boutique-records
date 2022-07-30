import { useEffect, useState } from 'react'

import Link from 'next/link'

import { LogoFull, LogoIcon } from '~/assets'
import { debounce } from '~/utils'

import { LanguageSwitcher } from './LanguageSwitcher'
import { NavBar } from './NavBar'
import { Container, Content, LogoContainer } from './styles'

export const Header = () => {
  const [atTop, setAtTop] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset
    setVisible(prevScrollPos - currentScrollPos > 0)

    setAtTop(currentScrollPos < 400)

    setPrevScrollPos(currentScrollPos)
  }, 40)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container
      style={{
        top: visible ? '0' : '-180px',
        backgroundColor: atTop ? 'transparent' : '#111214'
      }}
    >
      <Content>
        <Link href="/" passHref>
          <LogoContainer>
            <LogoFull />
            <LogoIcon />
          </LogoContainer>
        </Link>
        <NavBar />
        <LanguageSwitcher />
      </Content>
    </Container>
  )
}
