import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

export const ReleaseInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 820px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
`

export const Details = styled.div``

export const Genres = styled.div`
  display: flex;
  gap: 0.5em;
`

export const ReleaseTitle = styled.h1`
  font-family: Anton;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  line-height: 1;
  font-size: 60px;
  margin: 1rem 0 0.5rem;
`

export const Description = styled(ReactMarkdown)`
  color: white;
  margin: 1rem 0 2rem;
`

export const RelatedReleasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6rem 0 1rem;
  max-width: 900px;
`

export const RelatedReleasesTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 1rem;
`

export const ReleaseDate = styled.div`
  margin: 1rem 0 2rem;

  > strong {
    font-family: Quicksand;
  }

  > p,
  strong {
    font-size: 1em;
  }
`
