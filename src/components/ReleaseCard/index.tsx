import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { formatDate, hasBeenReleased } from '~/utils'

import { ArtistRowList } from '../ArtistRowList'
import { PlayButton } from '../PlayButton'
import { Container, ImageWrapper, ReleaseDate, TrackTitle } from './styles'

interface ReleaseCardProps {
  data: Release
}

export const ReleaseCard = ({ data }: ReleaseCardProps) => {
  const { locale } = useRouter()
  const { coverArt, releaseDate, artists, title, slug } = data
  const isUnreleased = !hasBeenReleased(releaseDate)

  return (
    <Container>
      <Link href={`/releases/${slug}`}>
        <ImageWrapper>
          <Image
            src={coverArt.url}
            width={200}
            height={200}
            alt={title}
            layout="responsive"
          />
          {isUnreleased && (
            <ReleaseDate>{formatDate(releaseDate, locale)}</ReleaseDate>
          )}
        </ImageWrapper>
      </Link>
      <Link href={`/releases/${slug}`} passHref>
        <TrackTitle title={title}>{title}</TrackTitle>
      </Link>

      <ArtistRowList data={artists} />

      <PlayButton track={data} />
    </Container>
  )
}
