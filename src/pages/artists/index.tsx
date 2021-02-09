import React from 'react'

import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

import { fetchArtists } from '~/graphql'
import { useTranslation } from '~/hooks'

import {
  Container,
  Title,
  Contents,
  ArtistCard,
  ArtistButton,
  Name,
  ArtistThumb
} from './styles'

interface ArtistsPageProps {
  artists: Artist[]
}

const Artists: NextPage<ArtistsPageProps> = ({ artists }) => {
  const { t } = useTranslation()
  return (
    <Container>
      <Title>{t('header_artists')}</Title>
      <Contents>
        {artists.map(artist => (
          <ArtistCard key={artist.id}>
            <ArtistThumb src={artist.thumb.url} width={500} height={500} />
            <Name>{artist.name}</Name>
            <Link href={`artists/${artist.slug}`}>
              <ArtistButton>{t('home_artistsReadMore')}</ArtistButton>
            </Link>
          </ArtistCard>
        ))}
      </Contents>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { artists } = await fetchArtists()

  return { props: { artists } }
}

export default Artists
