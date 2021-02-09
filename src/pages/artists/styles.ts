import Image from 'next/image'
import styled from 'styled-components'

import { ContainerBox } from '~/components'

export const Container = styled(ContainerBox)`
  margin: 4rem 0;
`

export const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  font-size: 2em;
  text-transform: uppercase;
  margin-bottom: 2rem;
`

export const Contents = styled.div`
  display: grid;
  gap: 2rem;

  gap: max(2vw, 1rem);
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
`
export const ArtistCard = styled.div`
  flex-wrap: nowrap;

  display: flex;
  align-items: center;
  flex-direction: column;
`

export const ArtistThumb = styled(Image)`
  transition: 0.2s all ease-in-out;
  filter: grayscale(1);

  &:hover {
    transform: scale(1.1);
    filter: unset;
  }
`

export const Name = styled.h3`
  text-transform: uppercase;
  color: ${props => props.theme.colors.ice};
  font-size: 1.5em;
  margin: 0.5em 0;
`

export const ArtistButton = styled.a`
  padding: 0.8rem 1.2rem;
  height: 48px;
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  background-color: ${props => props.theme.colors.secondary};
  transition: 0.2s all ease-in-out;
  font-weight: bold;
`
