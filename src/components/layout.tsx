import { FC } from 'react'

import { Header } from './'
import { Footer } from './Footer'

export const Layout: FC = props => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}
