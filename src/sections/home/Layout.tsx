import { FeaturedRelease } from './FeaturedRelease'
import { HomeHero } from './Hero'
import { LatestReleases } from './LatestReleases'
import * as Styled from './styles'
import { UpcomingReleases } from './UpcomingReleases'

export const HomeLayout = () => {
  return (
    <Styled.Container>
      <HomeHero />

      <Styled.ReleasesContainer>
        <Styled.ReleasesContent>
          <Styled.FeaturedContainer>
            <FeaturedRelease />
          </Styled.FeaturedContainer>

          <Styled.LatestReleasesContainer>
            <LatestReleases />
          </Styled.LatestReleasesContainer>

          <UpcomingReleases />
        </Styled.ReleasesContent>
      </Styled.ReleasesContainer>
    </Styled.Container>
  )
}
