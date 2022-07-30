import { ParsedUrlQuery } from 'querystring'

import { useCallback, useEffect, useState } from 'react'

import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'
import { RiFilterOffLine } from 'react-icons/ri'

import { ArtistRowList, ContainerBox, Select } from '~/components'
import { ReleaseCover } from '~/components/Skeleton'
import { fetchAllGenres, fetchReleases } from '~/graphql'
import { useTranslation } from '~/hooks'
import * as Styled from '~/styles/pages/releases/index'

type DateFilter = 'all' | 'available' | 'upcoming'

interface ReleasesQueryStringParams extends ParsedUrlQuery {
  search?: string
  type?: DateFilter
  genre?: string
}

type ReleasesProps = {
  releases: Release[]
  genres: { name: string }[]
} & ReleasesQueryStringParams

const Releases = ({
  releases,
  genres,
  genre = '',
  search = '',
  type = 'all'
}: ReleasesProps) => {
  const [query, setQuery] = useState(search)
  const [dateFilter, setDateFilter] = useState<DateFilter>(type)
  const [genreFilter, setGenreFilter] = useState(genre)

  const [items, setItems] = useState<Release[]>(releases)
  const { t } = useTranslation()

  const resetFilters = useCallback(() => {
    setQuery('')
    setDateFilter('all')
  }, [])

  useEffect(() => {
    fetchReleases({
      query,
      type: dateFilter,
      genre: genreFilter
    }).then(response => {
      setItems(response.releases)
    })
  }, [dateFilter, query, genreFilter])

  const onSelectDateChange = useCallback((value: DateFilter) => {
    setDateFilter(value)
  }, [])

  const onSelectGenreChange = useCallback((value: string) => {
    setGenreFilter(value)
  }, [])

  const selectOptions = [
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
        <Head>
          <title>{t('header_releases')} | House Boutique Records</title>
        </Head>
        <Styled.Title>{t('header_releases')}</Styled.Title>
        <Styled.Filters>
          <Styled.SearchBox>
            <Styled.Input
              name="search"
              onChange={e => setQuery(e.target.value)}
              enterKeyHint="send"
              value={query}
              placeholder={t('releases_searchPlaceholder')}
            />
            <FaSearch size={16} color="#fff" style={{ marginRight: 16 }} />
          </Styled.SearchBox>

          <Select
            onChange={onSelectDateChange}
            value={dateFilter}
            options={[
              { value: 'all', label: t('releases_all') },
              { value: 'available', label: t('releases_available') },
              { value: 'upcoming', label: t('releases_upcoming') }
            ]}
          />

          <Select
            onChange={onSelectGenreChange}
            value={genreFilter}
            options={selectOptions}
          />

          <Styled.ClearFilters
            onClick={resetFilters}
            aria-label="clear-filters"
            title={t('clearFilters')}
          >
            <RiFilterOffLine size={22} color="#fff" />
          </Styled.ClearFilters>

          <Styled.ResultsCount>
            <strong>{items.length}</strong> {t('releases_resultsFound')}
          </Styled.ResultsCount>
        </Styled.Filters>

        <Styled.ReleaseGrid>
          {items
            ? items.map(({ id, coverArt, title, slug, artists }) => (
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
                      <Styled.InfoButton>
                        {t('releases_moreInfo')}
                      </Styled.InfoButton>
                    </Link>
                  </Styled.Overlay>
                </Styled.Release>
              ))
            : [...Array(10)].map((_, i) => <ReleaseCover key={i} />)}
        </Styled.ReleaseGrid>
      </ContainerBox>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { search = '', type = 'all', genre = '' }
}: {
  query: ReleasesQueryStringParams
}) => {
  const { releases } = await fetchReleases({
    query: search,
    genre,
    type
  })

  const { genres } = await fetchAllGenres()

  return { props: { releases, search, type, genres, genre } }
}

export default Releases
