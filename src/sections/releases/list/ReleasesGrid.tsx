import Image from 'next/image'
import Link from 'next/link'

import { ArtistRowList } from '~/components'
import { ReleaseCoverSkeleton } from '~/components/Skeleton'
import { useTranslation } from '~/hooks'
import { Release } from '~/types'

import * as Styled from './styles'

interface ReleasesGridProps {
  loading: boolean
  releases: Release[]
}

export const ReleasesGrid = (props: ReleasesGridProps) => {
  const { releases, loading } = props
  const { t } = useTranslation()

  const skeletons = [...Array(15)].map((_, i) => (
    <ReleaseCoverSkeleton key={i} />
  ))

  if (loading) return <Styled.ReleaseGrid>{skeletons}</Styled.ReleaseGrid>
  if (!releases.length) return null
  return (
    <Styled.ReleaseGrid>
      {releases?.map(({ id, coverArt, title, slug, artists }) => (
        <Styled.Release key={id}>
          <Image
            src={coverArt.url}
            width={140}
            height={140}
            layout="responsive"
            alt={title}
          />
          <Styled.Overlay>
            <Styled.ReleaseTitle>{title}</Styled.ReleaseTitle>
            <ArtistRowList data={artists} />
            <Link href={`/releases/${slug}`}>
              <Styled.InfoButton>{t('releases_moreInfo')}</Styled.InfoButton>
            </Link>
          </Styled.Overlay>
        </Styled.Release>
      ))}
    </Styled.ReleaseGrid>
  )
}
