import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  width: 100%;
  gap: 3rem;

  @media (min-width: 1024px) {
    align-items: flex-start;
    width: 90%;
  }
`

export const ReleasedContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3rem;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`

export const FeaturedContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  align-items: flex-start;
`

export const FeaturedImageWrapper = styled.div``

export const Title = styled.h2`
  text-transform: uppercase;
  font-family: 'Ramabhadra';
  margin-bottom: 1em;
`

export const TrackTitle = styled.h3`
  margin-top: 0.2em;
  font-size: 1.6em;
  text-transform: uppercase;
  line-height: 1;
`

export const FeaturedContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`
export const FeaturedInfo = styled.div`
  flex-wrap: wrap;
`

export const Artist = styled.a`
  font-size: 1.2em;
  text-transform: none;

  &:hover {
    text-decoration: underline;
  }

  & + & {
    margin-left: 18px;
    position: relative;

    &:before {
      position: absolute;
      display: flex;
      justify-content: center;
      content: '/';
      left: -14px;
      top: 0;
    }
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
