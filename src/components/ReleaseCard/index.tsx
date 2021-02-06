import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { formatDate } from '~/utils/formatDate'

import {
  Container,
  ImageWrapper,
  ReleaseDate,
  TrackTitle,
  Artist
} from './styles'

type Props = Release & { unreleased?: boolean }

const ReleaseCard: React.FC<Props> = ({
  coverArt,
  unreleased = false,
  releaseDate,
  artists,
  title
}) => {
  const { locale } = useRouter()

  return (
    <Container>
      <ImageWrapper>
        <Image src={coverArt.url} width={150} height={150} />
        {unreleased && (
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

export default ReleaseCard
