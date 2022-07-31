import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Release } from '~/types'
import { formatDate, hasBeenReleased } from '~/utils'

import { ArtistRowList } from '../ArtistRowList'
import { PlayButton } from '../PlayButton'
import * as Styled from './styles'

interface ReleaseCardProps {
  data: Release
}

export const ReleaseCard = ({ data }: ReleaseCardProps) => {
  const { locale } = useRouter()
  const { coverArt, releaseDate, artists, title, slug } = data
  const isUnreleased = !hasBeenReleased(releaseDate)

  return (
    <Styled.Container>
      <Link href={`/releases/${slug}`}>
        <Styled.ImageWrapper>
          <Image
            src={coverArt.url}
            width={200}
            height={200}
            alt={title}
            layout="responsive"
          />
          {isUnreleased && (
            <Styled.ReleaseDate>
              {formatDate(releaseDate, locale)}
            </Styled.ReleaseDate>
          )}
        </Styled.ImageWrapper>
      </Link>
      <Link href={`/releases/${slug}`} passHref>
        <Styled.TrackTitle title={title}>{title}</Styled.TrackTitle>
      </Link>

      <ArtistRowList data={artists} />

      <PlayButton track={data} />
    </Styled.Container>
  )
}
