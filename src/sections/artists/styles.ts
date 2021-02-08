import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0 6rem;
  background-color: ${props => props.theme.colors.ice};
`

export const ArtistThumb = styled(Image)`
  transition: 0.2s all ease-in-out;
  filter: grayscale(1);

  &:hover {
    transform: scale(1.1);
    filter: unset;
  }
`

export const Title = styled.h1`
  color: ${props => props.theme.colors.black};
  font-size: 2em;
  text-transform: uppercase;
  margin-bottom: 2rem;
`

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 2rem;

  @media (min-width: 800px) {
    gap: unset;

    flex-direction: row;
  }
`
export const ArtistCard = styled.div`
  flex-wrap: nowrap;

  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Name = styled.h3`
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
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
