import { ParsedUrlQuery } from 'querystring'

import React from 'react'

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'

import { SocialIcon } from '~/components'
import { fetchArtists, fetchSingleArtist } from '~/graphql'

import {
  Container,
  Content,
  Bio,
  Name,
  ImageContainer,
  ArtistSocials,
  ArtistHeader,
  ReleasesContainer
} from './styles'

interface ArtistPageProps {
  artist: Artist
}

interface Params extends ParsedUrlQuery {
  slug: string
}

const Artist: NextPage<ArtistPageProps> = ({
  artist: { backgroundImage, name, localizations, artistPlatforms }
}) => {
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
          <Name>{name}</Name>
          <ArtistSocials>
            {artistPlatforms.map(platform => (
              <SocialIcon key={platform.id} {...platform} />
            ))}
          </ArtistSocials>
        </ArtistHeader>
        <Bio allowDangerousHtml={true}>{localizations[0]?.bio.html}</Bio>
      </Content>
      <ReleasesContainer></ReleasesContainer>
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
