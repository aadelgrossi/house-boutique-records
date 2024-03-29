import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  font-family: Anton;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  line-height: 1;
  font-size: max(52px, 4.5vw);
`

export const BioContainer = styled.div`
  color: white;
  margin: 0.5rem 0 4rem;

  @media (min-width: 720px) {
    width: 60%;
  }

  @media (min-width: 1440px) {
    width: 50%;
  }
`

export const BioParagraph = styled.p`
  margin-bottom: 1.5em;
  font-size: 1.1em;
`

export const Content = styled.div`
  z-index: 1;
  margin: -22% 5vw 0;

  @media (min-width: 720px) {
    margin-top: -38%;
  }

  p {
    line-height: 1.4;
  }
`

export const ReleasesContainer = styled.div`
  max-width: 1024px;
  margin-bottom: 4rem;
`

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 1em;
`

export const SeeAll = styled.h2`
  font-weight: 500;
  font-size: 1.2em;

  &:hover {
    text-decoration: underline;
  }
`

export const Title = styled.h2`
  font-size: 1.8em;
  margin-right: 1rem;
`
