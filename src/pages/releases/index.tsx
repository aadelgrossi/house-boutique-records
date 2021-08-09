import { ParsedUrlQuery } from 'querystring'

import { useCallback, useEffect, useState } from 'react'

import { GetServerSideProps, NextPage } from 'next'
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

import {
  Input,
  Title,
  Filters,
  SearchBox,
  ReleaseGrid,
  Release,
  Overlay,
  ReleaseTitle,
  InfoButton,
  ResultsCount,
  ClearFilters
} from './styles'

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

const Releases: NextPage<ReleasesProps> = ({
  releases,
  genres,
  genre = '',
  search = '',
  type = 'all'
}) => {
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
    fetchReleases({ query, type: dateFilter }).then(response =>
      setItems(response.releases)
    )
  }, [dateFilter, query])

  const onSelectDateChange = useCallback((value: DateFilter) => {
    setDateFilter(value)
  }, [])

  const onSelectGenreChange = useCallback((value: string) => {
    setGenreFilter(value)
  }, [])

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
        <Title>{t('header_releases')}</Title>
        <Filters>
          <SearchBox>
            <Input
              name="search"
              onChange={e => setQuery(e.target.value)}
              enterKeyHint="send"
              value={query}
              placeholder={t('releases_searchPlaceholder')}
            />
            <FaSearch size={16} color="#fff" style={{ marginRight: 16 }} />
          </SearchBox>

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
            options={[
              { value: '', label: t('releases_all_genres') },
              ...genres.map(genre => ({
                value: genre.name,
                label: genre.name.replace('_', ' ')
              }))
            ]}
          />

          <ClearFilters
            onClick={resetFilters}
            aria-label="clear-filters"
            title={t('clearFilters')}
          >
            <RiFilterOffLine size={22} color="#fff" />
          </ClearFilters>

          <ResultsCount>
            <strong>{items.length}</strong> {t('releases_resultsFound')}
          </ResultsCount>
        </Filters>

        <ReleaseGrid>
          {items
            ? items.map(({ id, coverArt, title, slug, artists }) => (
                <Release key={id}>
                  <Image
                    src={coverArt.url}
                    width={140}
                    height={140}
                    layout="responsive"
                    alt={title}
                  />
                  <Overlay>
                    <ReleaseTitle>{title}</ReleaseTitle>
                    <ArtistRowList data={artists} />
                    <Link href={`/releases/${slug}`}>
                      <InfoButton>{t('releases_moreInfo')}</InfoButton>
                    </Link>
                  </Overlay>
                </Release>
              ))
            : [...Array(10)].map((_, i) => <ReleaseCover key={i} />)}
        </ReleaseGrid>
      </ContainerBox>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { search = '', type = 'all' }
}: {
  query: ReleasesQueryStringParams
}) => {
  const { releases } = await fetchReleases({ query: search, type })

  const {
    __type: { enumValues: genres }
  } = await fetchAllGenres()

  return { props: { releases, search, type, genres } }
}

export default Releases
