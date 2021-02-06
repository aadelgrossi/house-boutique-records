import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 0;
`
export const ImageContainer = styled.div`
  position: relative;

  &:after {
    width: 100%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 1;

    background: rgb(17, 18, 20);
    background: linear-gradient(
      360deg,
      rgba(17, 18, 20, 1) 0%,
      rgba(17, 18, 20, 0.98) 4%,
      rgba(17, 18, 20, 0.65) 33%,
      rgba(17, 18, 20, 0) 85%
    );
  }
`

export const ArtistHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-start;
`

export const ArtistSocials = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`

export const Name = styled.h1`
  font-family: 'Anton';
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1;
  font-size: 60px;
`

export const Bio = styled(ReactMarkdown)`
  color: white;
  margin: 1rem 0 2rem;

  @media (min-width: 720px) {
    width: 60%;
  }
`

export const Content = styled.div`
  z-index: 1;
  margin: 0 5vw 5rem;

  @media (min-width: 720px) {
    margin-top: calc(-20vw - 8rem);
  }

  p {
    line-height: 1.4;
  }
`

export const ReleasesContainer = styled.div``

export const Releases = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 1rem;
`

export const Title = styled.h2`
  text-transform: uppercase;
  font-family: 'Ramabhadra';
  margin-bottom: 1em;
`
