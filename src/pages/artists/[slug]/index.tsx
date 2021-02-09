import { ParsedUrlQuery } from 'querystring'

import React from 'react'

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'

import { SocialIcon, ReleaseCard } from '~/components'
import { responsiveCardsConfig } from '~/constants'
import { fetchArtists, fetchSingleArtist } from '~/graphql'
import { useTranslation } from '~/hooks'

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
          <Carousel responsive={responsiveCardsConfig}>
            {releases.map(release => (
              <ReleaseCard key={release.id} data={release} />
            ))}
          </Carousel>
        </ReleasesContainer>
      </Content>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async ({ locales = ['pt'] }) => {
  const { artists } = await fetchArtists()

  // const paths = locales.flatMap(locale =>
  //   artists.map(artist => ({ params: { slug: artist.slug }, locale }))
  // )

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
