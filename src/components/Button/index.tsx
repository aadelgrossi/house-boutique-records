import { FC } from 'react'

import { Container } from './styles'

interface ButtonProps {
  outline?: boolean
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}

Button.defaultProps = {
  outline: false
}
