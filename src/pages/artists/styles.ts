import Image from 'next/image'
import styled from 'styled-components'

import { ContainerBox } from '~/components'

export const Container = styled(ContainerBox)`
  margin: 4rem 0;
`

export const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 2rem;
`

export const Contents = styled.div`
  width: 100%;
`
export const ArtistCard = styled.div`
  padding: 1rem;
  min-width: 300px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ArtistThumb = styled(Image)`
  transition: 0.2s all ease-in-out;
  padding: 0.2rem;
  filter: grayscale(1);

  &:hover {
    transform: scale(1.1);
    filter: unset;
  }
`

export const Name = styled.h3`
  text-transform: uppercase;
  color: ${props => props.theme.colors.ice};
  font-size: 1.4rem;
  margin: 0.5em 0;
  text-align: center;
`

export const ArtistButton = styled.a`
  padding: 0.8rem 1.2rem;
  height: 48px;
  margin: 0 auto;
  max-width: 180px;
  cursor: pointer;
  font-family: Quicksand;
  text-transform: uppercase;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary};
  transition: 0.2s all ease-in-out;
  font-weight: bold;
`
