import { useCallback, useMemo, useState } from 'react'

import { useQuery } from '@apollo/client'
import { isAfter, isBefore, parseISO, startOfToday } from 'date-fns'
import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'

import { ContainerBox, SelectItem } from '~/components'
import { ALL_GENRES, ALL_RELEASES } from '~/graphql'
import { ReleasesQueryResponse, ReleaseQueryVariables } from '~/graphql/types'
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
}

type ReleasesProps = ReleasesQueryStringParams & {
  genres: Genre[]
}

const Releases = ({
  genres,
  genre: initialGenre = '',
  search = '',
  first = 25,
  type = 'all'
}: ReleasesProps) => {
  const [query, setQuery] = useState(search)
  const [genre, setGenre] = useState(initialGenre)
  const [dateFilter, setDateFilter] = useState<DateFilter>(type)

  const today = startOfToday()
  const variables = { query, genre, first }

  const { data: response, loading } = useQuery<
    ReleasesQueryResponse,
    ReleaseQueryVariables
  >(ALL_RELEASES, {
    variables
  })

  const releases = useMemo(() => {
    if (dateFilter === 'all') return response?.releases || []
    if (dateFilter === 'upcoming')
      return (
        response?.releases.filter(release =>
          isAfter(parseISO(release.releaseDate), today)
        ) || []
      )
    if (dateFilter === 'available')
      return (
        response?.releases.filter(release =>
          isBefore(parseISO(release.releaseDate), today)
        ) || []
      )
    return []
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateFilter, response?.releases, today, genre])

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
          totalItems={releases.length}
          query={query}
          onQueryChange={setQuery}
          clearFilters={clearFilters}
          genreOptions={genreOptions}
          date={dateFilter}
          genre={genre}
          onSelectGenreChange={setGenre}
          onSelectDateChange={setDateFilter}
        />

        <Styled.ReleaseGrid>
          <ReleasesGrid releases={releases} loading={loading} />
        </Styled.ReleaseGrid>
      </ContainerBox>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { search = '', type = 'all', genre = '', first = 25 }
}: {
  query: ReleasesQueryStringParams
}) => {
  const { data: genresData } = await apolloClient.query({ query: ALL_GENRES })
  const date = startOfToday()

  await apolloClient.query<ReleasesQueryResponse, ReleaseQueryVariables>({
    query: ALL_RELEASES,
    variables: { date, query: search, genre, first }
  })

  return {
    props: { search, type, genres: genresData.genres, genre }
  }
}

export default Releases
