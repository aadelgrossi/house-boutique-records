import { ReactNode } from 'react'

import { Header } from './'
import { Footer } from './Footer'

export const Layout = ({ children }: { children: ReactNode }) => {
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
