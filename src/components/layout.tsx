import { ReactNode } from 'react'

import styled from 'styled-components'

import { Header } from './'
import { Footer } from './Footer'

const OuterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <OuterContainer>
      <Header />
      <main>{children}</main>
      <Footer />
    </OuterContainer>
  )
}
