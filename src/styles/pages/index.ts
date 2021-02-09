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
  min-height: 80vh;
  width: 100%;
  background-image: url('/hero-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0;

  @media (min-width: 720px) {
    background-position: center;
  }

  box-shadow: inset 188px 51px 185px 72px rgb(0 0 0 / 50%);

  &:before {
    width: 100%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 80%;
    z-index: 0;
    background: linear-gradient(0deg, #111214 0%, rgba(255, 255, 255, 0) 70%);
  }
`

export const Contents = styled.div`
  flex-direction: column;
  justify-content: center;
  z-index: 1;
`

export const HeroTitle = styled.h1`
  font-size: clamp(38px, 6rem, 4.5vw);
  font-family: 'Anton';
  width: clamp(359px, 37rem, 56vw);
  line-height: 0.95;
  text-shadow: 25px 25px 40px ${props => props.theme.colors.black};
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
  padding: 3rem max(1rem, 5vw);

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`

export const ReleasesContent = styled.div`
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
