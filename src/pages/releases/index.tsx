import { ParsedUrlQuery } from 'querystring'

import { useCallback, useEffect, useState } from 'react'

import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'

import { ContainerBox, Select } from '~/components'
import {
  fetchAllReleases,
  fetchReleasedReleases,
  fetchUpcomingReleases
} from '~/graphql'
import { useTranslation } from '~/hooks'

import {
  Input,
  Title,
  Filters,
  SearchBox,
  ReleaseGrid,
  Release,
  Overlay,
  ReleaseArtist,
  ReleaseTitle,
  InfoButton,
  ResultsCount
} from './styles'

type DateFilter = 'all' | 'available' | 'upcoming'

interface ReleasesQueryStringParams extends ParsedUrlQuery {
  search?: string
}

type ReleasesProps = {
  releases: Release[]
} & ReleasesQueryStringParams

const Releases: NextPage<ReleasesProps> = ({ releases, search = '' }) => {
  const [query, setQuery] = useState(search)
  const [dateFilter, setDateFilter] = useState<DateFilter>('all')

  const [items, setItems] = useState<Release[]>(releases)
  const { t } = useTranslation()

  useEffect(() => {
    switch (dateFilter) {
      case 'all':
        fetchAllReleases({ query }).then(({ releases }) => {
          setItems(releases)
        })
        break
      case 'available':
        fetchReleasedReleases({ query }).then(({ releases }) => {
          setItems(releases)
        })
        break
      case 'upcoming':
        fetchUpcomingReleases({ query }).then(({ releases }) => {
          setItems(releases)
        })
        break
    }
  }, [dateFilter, query])

  const onSelectChange = useCallback((value: DateFilter) => {
    setDateFilter(value)
  }, [])

  return (
    <ContainerBox>
      <Head>
        <title>{t('header_releases')} | House Boutique Records</title>
      </Head>
      <Title>{t('header_releases')}</Title>
      <Filters autoComplete="off">
        <SearchBox>
          <Input
            name="search"
            onChange={e => setQuery(e.target.value)}
            enterKeyHint="send"
            defaultValue={search}
            placeholder={t('releases_searchPlaceholder')}
          />
          <FaSearch size={16} color="#fff" style={{ marginRight: 16 }} />
        </SearchBox>

        <Select
          onChange={onSelectChange}
          value="all"
          options={[
            { value: 'all', label: t('releases_all') },
            { value: 'available', label: t('releases_available') },
            { value: 'upcoming', label: t('releases_upcoming') }
          ]}
        />
        <ResultsCount>
          <strong>{items.length}</strong> {t('releases_resultsFound')}
        </ResultsCount>
      </Filters>

      <ReleaseGrid>
        {items.map(({ id, coverArt, title, slug, artists }) => (
          <Release key={id}>
            <Image
              src={coverArt.url}
              width={140}
              height={140}
              layout="responsive"
              alt={title}
            />
            <Link href={`/releases/${slug}`}>
              <Overlay>
                <ReleaseTitle>{title}</ReleaseTitle>
                <ReleaseArtist>
                  {artists.map(artist => (
                    <ReleaseArtist key={artist.id}>{artist.name}</ReleaseArtist>
                  ))}
                </ReleaseArtist>
                <InfoButton>{t('releases_moreInfo')}</InfoButton>
              </Overlay>
            </Link>
          </Release>
        ))}
      </ReleaseGrid>
    </ContainerBox>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { search = '' }
}: {
  query: ReleasesQueryStringParams
}) => {
  const { releases } = await fetchAllReleases({ query: search })

  return { props: { releases, search } }
}

export default Releases
