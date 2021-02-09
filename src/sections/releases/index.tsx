import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import Carousel from 'react-multi-carousel'

import { Button, ReleaseCard, ArtistRowList, PlayButton } from '~/components'
import { responsiveCardsConfig } from '~/constants'
import { useTranslation } from '~/hooks'

import {
  Container,
  Content,
  FeaturedContainer,
  Title,
  FeaturedContent,
  ReleasedContainer,
  FeaturedInfo,
  FeaturedImageWrapper,
  TrackTitle,
  LatestReleasesContainer,
  UpcomingReleasesContainer,
  LatestReleasesCards
} from './styles'

type Props = {
  featured: Release
  upcoming: Release[]
  latest: Release[]
}

export const Releases: React.FC<Props> = ({ featured, latest, upcoming }) => {
  const { t } = useTranslation()

  return (
    <Container>
      <Content>
        <ReleasedContainer>
          <FeaturedContainer>
            <Title>{t('home_featuredReleaseHeading')}</Title>
            <FeaturedContent>
              <Link href={`/releases/${featured.slug}`}>
                <FeaturedImageWrapper>
                  <Image
                    src={featured.coverArt.url as string}
                    width={250}
                    height={250}
                    layout="fixed"
                  />
                </FeaturedImageWrapper>
              </Link>

              <FeaturedInfo>
                <Link href={`/releases/${featured.slug}`}>
                  <TrackTitle>{featured?.title}</TrackTitle>
                </Link>
                <ArtistRowList data={featured.artists} fontSize="1.2em" />
                <PlayButton track={featured} />
                <Button href={featured.link}>{t('streamNow')}</Button>
              </FeaturedInfo>
            </FeaturedContent>
          </FeaturedContainer>

          <LatestReleasesContainer>
            <Title>{t('home_releasesButton')}</Title>

            <LatestReleasesCards>
              {latest.map(release => (
                <ReleaseCard key={release.id} data={release} />
              ))}
            </LatestReleasesCards>
          </LatestReleasesContainer>
        </ReleasedContainer>

        <UpcomingReleasesContainer>
          <Title>{t('home_upcomingReleasesHeading')}</Title>
          <div style={{ width: '100%' }}>
            <Carousel ssr responsive={responsiveCardsConfig}>
              {upcoming.map(release => (
                <ReleaseCard key={release.id} data={release} />
              ))}
            </Carousel>
          </div>
        </UpcomingReleasesContainer>
      </Content>
    </Container>
  )
}
