import { FC } from 'react'

import { Container, Content } from './styles'

export const ContainerBox: FC = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  )
}
