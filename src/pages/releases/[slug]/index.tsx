import { ParsedUrlQuery } from 'querystring'

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Button, ReleaseCard } from '~/components'
import { ArtistRowList } from '~/components/ArtistRowList'
import {
  fetchAllReleases,
  fetchRelatedReleases,
  fetchSingleRelease
} from '~/graphql'
import { useTranslation } from '~/hooks/useTranslation'
import { formatLongDate } from '~/utils'

import {
  Container,
  Content,
  Details,
  ReleaseTitle,
  Description,
  ReleaseInfo,
  RelatedReleasesContainer,
  ReleaseDate,
  RelatedReleasesGrid,
  RelatedReleasesTitle
} from './styles'

interface ReleasePageProps {
  release: Release
  relatedReleases?: Release[]
}

interface Params extends ParsedUrlQuery {
  slug: string
}

const Release: NextPage<ReleasePageProps> = ({
  release: { title, artists, localizations, coverArt, link, releaseDate },
  relatedReleases
}) => {
  const { t } = useTranslation()
  const { locale } = useRouter()

  return (
    <Container>
      <Content>
        <ReleaseInfo>
          <Image src={coverArt.url} width={350} height={350} layout="fixed" />
          <Details>
            <ReleaseTitle>{title}</ReleaseTitle>
            <ArtistRowList data={artists} />

            <Description allowDangerousHtml={true}>
              {localizations[0]?.description?.html}
            </Description>

            <ReleaseDate>
              <strong>{t('releaseDate')}</strong>
              <p>{formatLongDate(releaseDate, locale)}</p>
            </ReleaseDate>

            {link && <Button href={link}>{t('streamNow')}</Button>}
          </Details>
        </ReleaseInfo>

        <RelatedReleasesContainer>
          <RelatedReleasesTitle>{t('relatedReleases')}</RelatedReleasesTitle>
          <RelatedReleasesGrid>
            {relatedReleases?.map(related => (
              <ReleaseCard key={related.id} data={related} />
            ))}
          </RelatedReleasesGrid>
        </RelatedReleasesContainer>
      </Content>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { releases } = await fetchAllReleases({})

  return {
    paths: releases.map(release => ({ params: { slug: release.slug } })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { slug } = params as Params

  const { release } = await fetchSingleRelease({ slug, locale })

  const { artists } = release

  const { releases: relatedReleases } = await fetchRelatedReleases({
    slug,
    artists: artists.map(a => a.slug)
  })

  return { props: { release, relatedReleases } }
}

export default Release
