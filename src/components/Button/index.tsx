import { FC } from 'react'

import Link from 'next/link'

import { Container } from './styles'

type ButtonProps = {
  href: string
  outline?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  href,
  outline = false
}) => {
  return (
    <Container outline={outline}>
      <Link href={href}>{children}</Link>
    </Container>
  )
}
