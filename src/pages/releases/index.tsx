import { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch, FaChevronDown } from 'react-icons/fa'

import { ContainerBox } from '~/components'
import { fetchAllReleases } from '~/graphql'
import { useTranslation } from '~/hooks/useTranslation'

import {
  Input,
  Title,
  Filters,
  SelectDateWrapper,
  SearchBox,
  SearchButton,
  DateSelect,
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
  const { t } = useTranslation()

  return (
    <ContainerBox>
      <Title>{t('header_releases')}</Title>
      <Filters>
        <SearchBox>
          <Input placeholder="Search for name or artist" />
          <SearchButton>
            <FaSearch size={16} color="#fff" />
          </SearchButton>
        </SearchBox>

        <SelectDateWrapper>
          <DateSelect>
            <option value="all">All</option>
            <option value="upcoming">Upcoming</option>
            <option value="released">Released</option>
          </DateSelect>
          <FaChevronDown size={16} color="#fff" />
        </SelectDateWrapper>
        <p>
          <strong>{releases.length}</strong> releases found
        </p>
      </Filters>
      <ReleaseGrid>
        {releases.map(release => (
          <Release key={release.id}>
            <Image
              src={release.coverArt.url}
              width={150}
              height={150}
              layout="responsive"
            />
            <Link href={`/releases/${release.slug}`}>
              <Overlay>
                <ReleaseTitle>{release.title}</ReleaseTitle>
                <ReleaseArtist>
                  {release.artists.map(artist => (
                    <ReleaseArtist key={artist.id}>{artist.name}</ReleaseArtist>
                  ))}
                </ReleaseArtist>
                <InfoButton>Ver detalhes</InfoButton>
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
