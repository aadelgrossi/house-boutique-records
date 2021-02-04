import React, { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  outline?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  outline = false
}) => {
  return (
    <Container outline={outline}>
      <a>{children}</a>
    </Container>
  )
}
