import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Hero = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 0 max(1rem, 5vw);
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-image: url('/hero-bg-2.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 90% 0;

  @media (min-width: 900px) {
    background-position: 50% 30%;
  }

  box-shadow: inset 188px 51px 185px 72px rgb(0 0 0 / 60%);

  /* &:after {
    width: 100%;
    height: 100%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    background: linear-gradient(0deg, #111214 0%, rgba(255, 255, 255, 0) 70%);
  } */
`

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 2rem;
  max-width: 1368px;
  z-index: 1;
`

export const HeroTitle = styled.h1`
  font-size: clamp(52px, 5rem, 5vw);
  font-family: Anton;
  min-width: 400px;
  line-height: 1.05;
  letter-spacing: 1px;
  text-shadow: 10px 5px 30px ${props => props.theme.colors.black};
`

export const ButtonGroup = styled.div`
  margin: 2rem 0 4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 600px) {
    justify-content: flex-start;
  }

  gap: 1em;
`

export const ReleasesContainer = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 6rem max(1rem, 5vw) 3rem;

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`

export const ReleasesContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1368px;
  gap: 3rem;

  @media (min-width: 1100px) {
    display: grid;
    grid-column-gap: 4rem;
    grid-row-gap: 2rem;
    grid-template-areas:
      'featured released'
      'upcoming released';

    grid-template-columns: 50% auto;
    grid-template-rows: auto auto;
  }
`

export const FeaturedContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: featured;
`

export const FeaturedImageWrapper = styled.div`
  cursor: pointer;
  width: 100%;

  @media (min-width: 600px) {
    width: 250px;
  }

  transition: 0.2s transform ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1em;
`

export const FeaturedTitle = styled.h2`
  font-size: 2em;
`

export const TrackTitle = styled.a`
  cursor: pointer;
  font-family: Quicksand;
  font-weight: 700;
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
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`
export const FeaturedInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  align-items: center;

  @media (min-width: 600px) {
    margin: unset;
    align-items: flex-start;
  }

  > a:last-of-type {
    margin-top: 1rem;
  }
`

export const LatestReleasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: released;
`

export const UpcomingReleasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 800px;
  grid-area: upcoming;
`

const BaseGrid = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  flex-wrap: wrap;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`

export const UpcomingReleasesGrid = styled(BaseGrid)`
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
`

export const LatestReleasesGrid = styled(BaseGrid)`
  grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
`
