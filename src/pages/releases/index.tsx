import { useState } from 'react'

import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'

import { ContainerBox } from '~/components'
import { fetchAllReleases } from '~/graphql'
import { useTranslation } from '~/hooks'
import { debounce } from '~/utils/debounce'

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
  InfoButton
} from './styles'

interface ReleasesProps {
  releases: Release[]
}

const Releases: NextPage<ReleasesProps> = ({ releases }) => {
  const [items, setItems] = useState<Release[]>(releases)
  const { t } = useTranslation()

  const handleSearch = debounce((query: string) => {
    fetchAllReleases({ query }).then(response => {
      setItems(response.releases)
    })
  }, 600)

  return (
    <ContainerBox>
      <Head>
        <title>{t('header_releases')} | House Boutique Records</title>
      </Head>
      <Title>{t('header_releases')}</Title>
      <Filters>
        <SearchBox>
          <Input
            placeholder={t('releases_searchPlaceholder')}
            onChange={e => handleSearch(e.target.value)}
          />
          <FaSearch size={16} color="#fff" style={{ marginRight: 16 }} />
        </SearchBox>
        <p>
          <strong>{items.length}</strong> {t('releases_resultsFound')}
        </p>
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

export const getStaticProps: GetStaticProps = async () => {
  const { releases } = await fetchAllReleases({ query: '' })

  return { props: { releases } }
}

export default Releases
