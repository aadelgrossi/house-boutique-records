import { FC } from 'react'

import { Header } from './'
import { Footer } from './Footer'

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', marginBottom: '3rem' }}>
        {children}
      </main>
      <Footer />
    </>
  )
}
