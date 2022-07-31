import { useCallback, useMemo, useState } from 'react'

import { useQuery } from '@apollo/client'
import { isAfter, isBefore, parseISO, startOfToday } from 'date-fns'
import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'

import { ContainerBox, SelectItem } from '~/components'
import { ALL_GENRES, ALL_RELEASES } from '~/graphql'
import {
  ReleaseQueryVariables,
  AllReleasesQueryResponse
} from '~/graphql/types'
import { useTranslation } from '~/hooks'
import { apolloClient } from '~/lib/apollo'
import { ReleasesGrid, ReleasesFilters } from '~/sections/releases'
import * as Styled from '~/sections/releases/list/styles'
import { Genre } from '~/types'

type DateFilter = 'all' | 'available' | 'upcoming'
interface ReleasesQueryStringParams {
  search?: string
  type?: DateFilter
  genre?: string
  first?: number
  after?: string | null
}

type ReleasesProps = ReleasesQueryStringParams & {
  genres: Genre[]
}

const Releases = ({
  genres,
  genre: initialGenre = '',
  search = '',
  type = 'all',
  after
}: ReleasesProps) => {
  const [query, setQuery] = useState(search)
  const [genre, setGenre] = useState(initialGenre)
  const [dateFilter, setDateFilter] = useState<DateFilter>(type)

  const today = startOfToday()

  const variables = { query, genre, after }

  const { data: response, loading } = useQuery<
    AllReleasesQueryResponse,
    ReleaseQueryVariables
  >(ALL_RELEASES, {
    variables
  })

  const totalItems = response?.releasesConnection.aggregate.count || 0

  const releases = useMemo(() => {
    const content = response?.releasesConnection.edges.map(edge => edge.node)
    if (dateFilter === 'all') return content || []
    if (dateFilter === 'upcoming')
      return (
        content?.filter(release =>
          isAfter(parseISO(release.releaseDate), today)
        ) || []
      )
    if (dateFilter === 'available')
      return (
        content?.filter(release =>
          isBefore(parseISO(release.releaseDate), today)
        ) || []
      )
    return []
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateFilter, response?.releasesConnection, today, genre])

  const { t } = useTranslation()

  const clearFilters = useCallback(() => {
    setQuery('')
    setDateFilter('all')
  }, [])

  const genreOptions: SelectItem[] = [
    {
      value: '',
      label: t('releases_all_genres')
    },
    ...genres.map(({ name }) => ({
      value: name,
      label: name
    }))
  ]

  return (
    <>
      <NextSeo
        title={`${t('header_releases')} | House Boutique Records`}
        description={`${t('releasesMetaDescription')}`}
        canonical="https://www.houseboutiquerecords.com/artists"
        openGraph={{
          type: 'website',
          title: `${t('header_releases')} | House Boutique Records`,
          url: 'https://www.houseboutiquerecords.com/releases',
          description: `${t('releasesMetaDescription')}`,
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          images: [
            {
              url: 'https://www.houseboutiquerecords.com/hb-light.jpg',
              width: 1200,
              height: 630,
              alt: 'House Boutique Records'
            }
          ]
        }}
      />
      <ContainerBox>
        <Styled.Title>{t('header_releases')}</Styled.Title>
        <ReleasesFilters
          totalItems={totalItems}
          query={query}
          onQueryChange={setQuery}
          clearFilters={clearFilters}
          genreOptions={genreOptions}
          date={dateFilter}
          genre={genre}
          onSelectGenreChange={setGenre}
          onSelectDateChange={setDateFilter}
        />

        <ReleasesGrid releases={releases} loading={loading} />
      </ContainerBox>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { search = '', type = 'all', genre = '', first = 5, after = null }
}: {
  query: ReleasesQueryStringParams
}) => {
  const { data: genresData } = await apolloClient.query({ query: ALL_GENRES })
  // const date = startOfToday()

  // await apolloClient.query<AllReleasesQueryResponse, ReleaseQueryVariables>({
  //   query: ALL_RELEASES,
  //   variables: { date, query: search, genre, after, first }
  // })

  return {
    props: { search, type, genres: genresData.genres, genre, first, after }
  }
}

export default Releases
