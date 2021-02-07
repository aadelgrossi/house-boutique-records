import { ParsedUrlQuery } from 'querystring'

import React from 'react'

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'

import { SocialIcon, ReleaseCard, ReleaseGroup } from '~/components'
import { fetchArtists, fetchSingleArtist } from '~/graphql'
import { useTranslation } from '~/hooks/useTranslation'

import {
  Container,
  Content,
  Bio,
  Name,
  ImageContainer,
  ArtistSocials,
  ArtistHeader,
  ReleasesContainer,
  Title
} from './styles'

interface ArtistPageProps {
  artist: Artist
}

interface Params extends ParsedUrlQuery {
  slug: string
}

const Artist: NextPage<ArtistPageProps> = ({
  artist: { backgroundImage, name, localizations, artistPlatforms, releases }
}) => {
  const { t } = useTranslation()

  return (
    <Container>
      <ImageContainer>
        <Image
          src={backgroundImage.url}
          layout="responsive"
          width={1200}
          height={750}
        />
      </ImageContainer>
      <Content>
        <ArtistHeader>
          <ArtistSocials>
            {artistPlatforms.map(platform => (
              <SocialIcon key={platform.id} {...platform} />
            ))}
          </ArtistSocials>
          <Name>{name}</Name>
        </ArtistHeader>
        <Bio allowDangerousHtml={true}>{localizations[0]?.bio.html}</Bio>
        <ReleasesContainer>
          <Title>
            {t('artists_tracksBy')}
            {` ${name}`}
          </Title>

          <ReleaseGroup>
            {releases.map(release => (
              <ReleaseCard key={release.id} {...release} />
            ))}
          </ReleaseGroup>
        </ReleasesContainer>
      </Content>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { artists } = await fetchArtists()

  return {
    paths: artists.map(artist => ({ params: { slug: artist.slug } })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { slug } = params as Params

  const { artist } = await fetchSingleArtist({ slug, locale })

  return { props: { artist } }
}

export default Artist
