import React from 'react'

import { Button } from '~/components'

import { Container, Title, ButtonGroup, Contents } from './styles'

export const Hero: React.FC = () => {
  return (
    <Container>
      <Contents>
        <Title>YOUR PLACE FOR THE FINEST TRIBAL, CIRCUIT & HOUSE MUSIC</Title>
        <ButtonGroup>
          <Button>Latest Releases</Button>
          <Button outline>Meet the artists</Button>
        </ButtonGroup>
      </Contents>
    </Container>
  )
}
