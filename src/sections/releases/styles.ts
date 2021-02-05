import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  width: 80%;

  @media (min-width: 620px) {
    align-items: flex-start;
  }
`

export const ReleasedContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`

export const FeaturedContainer = styled.div`
  width: 100%;
  margin: 1rem 0;

  @media (min-width: 1200px) {
    width: 40%;
  }
`

export const FeaturedImageWrapper = styled.div`
  width: max(50%, 250px);
  margin-right: 1rem;
`

export const Title = styled.h2`
  text-transform: uppercase;
  font-family: 'Ramabhadra';
  margin-bottom: 1em;
`

export const TrackTitle = styled.h3`
  margin-top: 0.2em;
  font-size: 1.3em;
  text-transform: uppercase;
  line-height: 1;
`

export const FeaturedContent = styled.div`
  display: flex;
  flex-direction: row;
`
export const FeaturedInfo = styled.div``

export const Artist = styled.a`
  font-size: 0.9em;
  & + & {
    margin-left: 10px;
  }
`

export const Card = styled.div``

export const LatestReleasesContainer = styled.div`
  margin: 1rem 0;
`

export const LatestReleasesContent = styled.div`
  justify-content: center;

  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;

  @media (min-width: 620px) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`

export const UpcomingReleasesContainer = styled.div``
export const UpcomingReleasesContent = styled.div`
  justify-content: center;

  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 620px) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
`

export const ReleaseDate = styled.p`
  position: absolute;
  bottom: 12px;
  left: 6px;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  font-size: 0.6em;
  font-weight: 500;
  background-color: ${props => props.theme.colors.secondary};
  width: fit-content;
  padding: 0.1rem 0.5rem;
  border-radius: 1rem;
`
