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

export const ReleaseTitle = styled.h1`
  font-family: Anton;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  line-height: 1;
  font-size: 60px;
  margin-top: 1rem;
`

export const Description = styled(ReactMarkdown)`
  color: white;
  margin: 1rem 0 2rem;
`

export const RelatedReleasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0 1rem;
`

export const RelatedReleasesTitle = styled.h3`
  font-size: 1.5em;
`

export const RelatedReleasesGrid = styled.div`
  margin-top: 1rem;
  display: grid;
  gap: max(2vw, 2rem);
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  max-width: 820px;
`
export const ReleaseDate = styled.div`
  margin: 1rem 0 2rem;

  > p,
  strong {
    font-size: 0.9em;
  }
`
