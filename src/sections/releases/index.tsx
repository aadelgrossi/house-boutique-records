import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { ReleaseCard, ReleaseGroup } from '~/components'
import { useTranslation } from '~/hooks/useTranslation'

import {
  Container,
  FeaturedContainer,
  Title,
  FeaturedContent,
  ReleasedContainer,
  FeaturedInfo,
  FeaturedImageWrapper,
  Artist,
  TrackTitle,
  LatestReleasesContainer,
  UpcomingReleasesContainer
} from './styles'

type Props = {
  featured: Release
  upcoming: Release[]
  latest: Release[]
}

export const Releases: React.FC<Props> = ({ featured, latest, upcoming }) => {
  const { locale } = useRouter()
  const { t } = useTranslation()

  return (
    <Container>
      <ReleasedContainer>
        <FeaturedContainer>
          <Title>{t('home_featuredReleaseHeading')}</Title>
          <FeaturedContent>
            <FeaturedImageWrapper>
              <Image
                src={featured?.coverArt.url as string}
                width={300}
                height={300}
              />
            </FeaturedImageWrapper>
            <FeaturedInfo>
              <TrackTitle>{featured?.title}</TrackTitle>
              {featured?.artists.map(artist => (
                <Link
                  key={artist.id}
                  href={`/artists/${artist.slug}`}
                  locale={locale}
                >
                  <Artist>{artist.name}</Artist>
                </Link>
              ))}
            </FeaturedInfo>
          </FeaturedContent>
        </FeaturedContainer>

        <LatestReleasesContainer>
          <Title>{t('home_releasesButton')}</Title>

          <ReleaseGroup>
            {latest.map(release => (
              <ReleaseCard key={release.id} {...release} />
            ))}
          </ReleaseGroup>
        </LatestReleasesContainer>
      </ReleasedContainer>

      <UpcomingReleasesContainer>
        <Title>{t('home_upcomingReleasesHeading')}</Title>

        <ReleaseGroup>
          {upcoming.map(release => (
            <ReleaseCard key={release.id} {...release} />
          ))}
        </ReleaseGroup>
      </UpcomingReleasesContainer>
    </Container>
  )
}
