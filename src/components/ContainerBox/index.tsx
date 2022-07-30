import { ReactNode } from 'react'

import { Container, Content } from './styles'

export const ContainerBox = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  )
}
