import { FC } from 'react'

import { Header } from './'
import { Footer } from './Footer'

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
