import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { formatDate } from '~/utils/formatDate'

import {
  Container,
  FeaturedContainer,
  Title,
  FeaturedContent,
  ReleasedContainer,
  FeaturedInfo,
  FeaturedImageWrapper,
  Artist,
  ImageWrapper,
  TrackTitle,
  Card,
  LatestReleasesContainer,
  LatestReleasesContent,
  UpcomingReleasesContainer,
  UpcomingReleasesContent,
  ReleaseDate
} from './styles'

type Props = {
  featured: Release
  upcoming: Release[]
  latest: Release[]
}

export const Releases: React.FC<Props> = ({ featured, latest, upcoming }) => {
  const { locale } = useRouter()

  return (
    <Container>
      <ReleasedContainer>
        <FeaturedContainer>
          <Title>Featured Release</Title>
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
          <Title>Latest</Title>

          <LatestReleasesContent>
            {latest.map(release => (
              <Card key={release.id}>
                <Image
                  src={release.coverArt.url}
                  width={200}
                  height={200}
                  layout="intrinsic"
                />
                <TrackTitle>{release.title}</TrackTitle>
                {release.artists.map(artist => (
                  <Link
                    key={artist.id}
                    href={`/artists/${artist.slug}`}
                    locale={locale}
                  >
                    <Artist>{artist.name}</Artist>
                  </Link>
                ))}
              </Card>
            ))}
          </LatestReleasesContent>
        </LatestReleasesContainer>
      </ReleasedContainer>

      <UpcomingReleasesContainer>
        <Title>Upcoming</Title>

        <UpcomingReleasesContent>
          {upcoming.map(release => (
            <Card key={release.id}>
              <ImageWrapper>
                <Image src={release.coverArt.url} width={200} height={200} />
                <ReleaseDate>{formatDate(release.releaseDate)}</ReleaseDate>
              </ImageWrapper>
              <TrackTitle>{release.title}</TrackTitle>
              {release.artists.map(artist => (
                <>
                  <Link
                    key={artist.id}
                    href={`/artists/${artist.slug}`}
                    locale={locale}
                  >
                    <Artist>{artist.name}</Artist>
                  </Link>
                </>
              ))}
            </Card>
          ))}
        </UpcomingReleasesContent>
      </UpcomingReleasesContainer>
    </Container>
  )
}
