import { useQuery } from '@apollo/client'
import Link from 'next/link'
import Slider from 'react-slick'

import { FeaturedSkeleton } from '~/components/Skeleton'
import { ALL_ARTISTS } from '~/graphql'
import { useTranslation } from '~/hooks'
import { Artist } from '~/types'

import settings from './sliderSettings'
import * as Styled from './styles'

interface ArtistsQueryResponse {
  artists: Artist[]
}

export const ArtistsListLayout = () => {
  const { data, loading } = useQuery<ArtistsQueryResponse>(ALL_ARTISTS)

  const { t } = useTranslation()
  if (loading || !data) return <FeaturedSkeleton />

  return (
    <Styled.Container>
      <Styled.Title>{t('header_artists')}</Styled.Title>
      <Styled.Contents>
        <Slider {...settings}>
          {data.artists.map(({ id, thumb, name, slug }) => (
            <Styled.ArtistCard key={id}>
              <Styled.ArtistThumb src={thumb.url} width={500} height={500} />
              <Styled.Name>{name}</Styled.Name>
              <Link href={`artists/${slug}`} passHref>
                <Styled.ArtistButton>
                  {t('home_artistsReadMore')}
                </Styled.ArtistButton>
              </Link>
            </Styled.ArtistCard>
          ))}
        </Slider>
      </Styled.Contents>
    </Styled.Container>
  )
}
