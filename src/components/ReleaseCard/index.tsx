import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { formatDate, hasBeenReleased } from '~/utils'

import {
  Container,
  ImageWrapper,
  ReleaseDate,
  TrackTitle,
  Artist
} from './styles'

export const ReleaseCard: React.FC<Release> = ({
  coverArt,
  releaseDate,
  artists,
  title
}) => {
  const { locale } = useRouter()

  return (
    <Container>
      <ImageWrapper>
        <Image src={coverArt.url} width={150} height={150} layout="fixed" />
        {!hasBeenReleased(releaseDate) && (
          <ReleaseDate>{formatDate(releaseDate, locale)}</ReleaseDate>
        )}
      </ImageWrapper>
      <TrackTitle>{title}</TrackTitle>
      {artists.map(artist => (
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
    </Container>
  )
}
