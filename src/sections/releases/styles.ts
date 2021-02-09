import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 3rem max(1rem, 5vw);

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 1368px;
  gap: 3rem;
`

export const ReleasedContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3rem;
  margin: 1rem 0 3rem;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`

export const FeaturedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const FeaturedImageWrapper = styled.div`
  cursor: pointer;

  transition: 0.2s transform ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`

export const Title = styled.h2`
  text-transform: uppercase;
  font-family: 'Ramabhadra';
  margin-bottom: 1em;
`

export const TrackTitle = styled.h3`
  cursor: pointer;
  margin-top: 0.2em;
  font-size: 1.6em;
  text-transform: uppercase;
  line-height: 1;
  transition: 0.2s all ease-in-out;

  &:hover {
    transform: scale(1.1) translateX(5px);
  }
`

export const FeaturedContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`
export const FeaturedInfo = styled.div`
  > a:last-of-type {
    margin-top: 1rem;
  }
`

export const LatestReleasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 820px;
`

export const UpcomingReleasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 800px;
`

export const LatestReleasesCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`
