import { FC } from 'react'

import { Header } from './'

export const Layout: FC = props => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>{props.children}</main>
    </div>
  )
}
