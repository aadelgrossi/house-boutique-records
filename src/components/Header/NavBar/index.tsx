import React, { useCallback, useState } from 'react'

import { IoIosMenu } from 'react-icons/io'

import { FullPageMenu } from '../FullPageMenu'
import { MenuItems } from './MenuItems'
import { Container, Menu, MobileMenu } from './styles'

export const NavBar = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuActive(state => !state)
  }, [])

  return (
    <Container>
      <Menu>
        <MenuItems />
      </Menu>
      <MobileMenu
        role="menu"
        aria-label="mobile-menu"
        onClick={toggleMobileMenu}
      >
        <IoIosMenu size={40} color="#fff" />
      </MobileMenu>

      <FullPageMenu active={mobileMenuActive} close={toggleMobileMenu}>
        <MenuItems toggleMobileMenu={toggleMobileMenu} />
      </FullPageMenu>
    </Container>
  )
}
