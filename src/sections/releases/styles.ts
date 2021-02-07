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

export const LatestReleasesContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const UpcomingReleasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
