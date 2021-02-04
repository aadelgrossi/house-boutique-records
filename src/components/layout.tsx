import { FC } from 'react'

import { Header } from './'

export const Layout: FC = props => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 lg:container px-4 py-6 md:px-6 md:py-12">
        {props.children}
      </main>
    </div>
  )
}
