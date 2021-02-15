import React, {
  AnchorHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction
} from 'react'

import { Container } from './styles'

const BadgeComponent: ForwardRefRenderFunction<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, href }, ref) => {
  return (
    <Container ref={ref} href={href}>
      {children}
    </Container>
  )
}

export const Badge = forwardRef(BadgeComponent)
