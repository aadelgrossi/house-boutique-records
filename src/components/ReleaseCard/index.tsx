import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiFillPlayCircle } from 'react-icons/ai'

import { usePlayer } from '~/hooks/usePlayer'
import { formatDate, hasBeenReleased } from '~/utils'

import { ArtistRowList } from '../ArtistRowList'
import { Container, ImageWrapper, ReleaseDate, TrackTitle } from './styles'

interface Props {
  data: Release
}

export const ReleaseCard: React.FC<Props> = ({ data }) => {
  const { locale } = useRouter()
  const { coverArt, releaseDate, artists, title, slug } = data
  const { loadTrack } = usePlayer()

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

      <ArtistRowList data={artists} />

      <button onClick={() => loadTrack(data)}>
        <AiFillPlayCircle size={20} color="#fff" />
      </button>
    </Container>
  )
}
