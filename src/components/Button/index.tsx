import {
  AnchorHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction
} from 'react'

import { Container } from './styles'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  outline?: boolean
}

const ButtonElement: ForwardRefRenderFunction<
  HTMLAnchorElement,
  ButtonProps
> = ({ children, outline = false, ...rest }, ref) => {
  return (
    <Container ref={ref} outline={outline} {...rest}>
      {children}
    </Container>
  )
}

export const Button = forwardRef(ButtonElement)
