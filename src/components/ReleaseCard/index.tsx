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

interface Props {
  data: Release
}

export const ReleaseCard: React.FC<Props> = ({
  data: { coverArt, releaseDate, artists, title, slug }
}) => {
  const { locale } = useRouter()

  return (
    <Container>
      <Link href={`/releases/${slug}`}>
        <ImageWrapper>
          <Image src={coverArt.url} width={180} height={180} layout="fixed" />
          {!hasBeenReleased(releaseDate) && (
            <ReleaseDate>{formatDate(releaseDate, locale)}</ReleaseDate>
          )}
        </ImageWrapper>
      </Link>
      <Link href={`/releases/${slug}`}>
        <TrackTitle>{title}</TrackTitle>
      </Link>

      {artists.map(artist => (
        <Link key={artist.id} href={`/artists/${artist.slug}`} locale={locale}>
          <Artist>{artist.name}</Artist>
        </Link>
      ))}
    </Container>
  )
}
