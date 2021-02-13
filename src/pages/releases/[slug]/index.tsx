import { ParsedUrlQuery } from 'querystring'

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import {
  Button,
  ReleaseCard,
  ArtistRowList,
  PlayButton,
  ContainerBox
} from '~/components'
import {
  fetchReleases,
  fetchRelatedReleases,
  fetchSingleRelease
} from '~/graphql'
import { useTranslation } from '~/hooks'
import { formatLongDate } from '~/utils'

import {
  Details,
  ReleaseTitle,
  ImageContainer,
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

const Release: NextPage<ReleasePageProps> = ({ release, relatedReleases }) => {
  const { title, artists, localizations, coverArt, link, releaseDate } = release
  const { t } = useTranslation()
  const { locale, query } = useRouter()

  const artistsNames = artists.flatMap(artist => artist.name).join(', ')

  const metaDescription = `
    ${localizations[0]?.description?.text ?? ''}${t('by')} ${artistsNames}. 
    ${t('releaseDate')}: ${formatLongDate(releaseDate, locale)}`

  return (
    <>
      <NextSeo
        title={`${title} | ${t('header_releases')} | House Boutique Records`}
        description={metaDescription}
        canonical={`https://www.houseboutiquerecords.com/releases/${query.slug}`}
        openGraph={{
          type: 'music.song',
          title: `${title} | ${t('header_releases')} | House Boutique Records`,
          description: metaDescription,
          url: `https://www.houseboutiquerecords.com/releases/${query.slug}`,
          images: [
            {
              url: coverArt.url,
              width: 500,
              height: 500,
              alt: title
            }
          ]
        }}
        additionalMetaTags={[{ property: 'og:audio', content: link }]}
      />
      <ContainerBox>
        <Head>
          <title>{title} | House Boutique Records</title>
        </Head>
        <ReleaseInfo>
          <ImageContainer>
            <Image src={coverArt.url} width={300} height={300} alt={title} />
          </ImageContainer>
          <Details>
            <ReleaseTitle>{title}</ReleaseTitle>
            <ArtistRowList data={artists} fontSize="1rem" />

            <Description allowDangerousHtml={true}>
              {localizations[0]?.description?.html}
            </Description>

            <PlayButton track={release} />

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
      </ContainerBox>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async ({ locales = ['pt'] }) => {
  const { releases } = await fetchReleases({})

  const paths = locales.flatMap(locale =>
    releases.map(release => ({ params: { slug: release.slug }, locale }))
  )

  return {
    paths,
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

  return { props: { release, relatedReleases }, revalidate: 60 }
}

export default Release
