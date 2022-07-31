import { useQuery } from '@apollo/client'
import { startOfToday } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

import { ArtistRowList, Button, PlayButton } from '~/components'
import { FeaturedSkeleton } from '~/components/Skeleton'
import { LATEST_RELEASE } from '~/graphql'
import { useTranslation } from '~/hooks'
import { Release } from '~/types'

import * as Styled from './styles'

interface FeaturedReleaseResponse {
  releases: Release[]
}

interface FeaturedReleaseArgs {
  date: Date
}

export const FeaturedRelease = () => {
  const date = startOfToday()
  const { data, loading } = useQuery<
    FeaturedReleaseResponse,
    FeaturedReleaseArgs
  >(LATEST_RELEASE, { variables: { date } })

  const { t } = useTranslation()

  if (loading || !data) return <FeaturedSkeleton />
  const [featured] = data.releases

  return (
    <>
      <Styled.TitleGroup>
        <Styled.FeaturedTitle>
          {t('home_featuredReleaseHeading')}
        </Styled.FeaturedTitle>
      </Styled.TitleGroup>
      <Styled.FeaturedContent>
        <Link href={`/releases/${featured.slug}`}>
          <Styled.FeaturedImageWrapper>
            <Image
              src={featured.coverArt.url as string}
              width={280}
              height={280}
              layout="responsive"
              alt={featured.title}
            />
          </Styled.FeaturedImageWrapper>
        </Link>

        <Styled.FeaturedInfo>
          <Link href={`/releases/${featured.slug}`} passHref>
            <Styled.TrackTitle>{featured?.title}</Styled.TrackTitle>
          </Link>
          <ArtistRowList data={featured.artists} fontSize="1.2em" />
          <PlayButton track={featured} />
          {featured.link && (
            <Button href={featured.link} style={{ marginTop: '3rem' }}>
              {t('streamNow')}
            </Button>
          )}
        </Styled.FeaturedInfo>
      </Styled.FeaturedContent>
    </>
  )
}
