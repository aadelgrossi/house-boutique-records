import { ParsedUrlQuery } from 'querystring'

import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

import { SINGLE_RELEASE, RELATED_RELEASES, RELEASES_SLUGS } from '~/graphql'
import {
  ReleaseSingleResponse,
  ReleaseSingleVariables,
  ReleasesQueryResponse
} from '~/graphql/types'
import { useTranslation } from '~/hooks'
import { apolloClient } from '~/lib/apollo'
import { ReleasesSlugLayout } from '~/sections/releases'
import { Release } from '~/types'
import { formatLongDate } from '~/utils'

interface ReleasePageProps {
  release: Release
  relatedReleases?: Release[]
}

interface Params extends ParsedUrlQuery {
  slug: string
}

const Release = (props: ReleasePageProps) => {
  const { title, artists, coverArt, releaseDate } = props.release
  const { t } = useTranslation()
  const { locale, query } = useRouter()

  const artistsNames = artists.flatMap(artist => artist.name).join(', ')

  const metaDescription = `"${title}" ${t('by')} ${artistsNames}.
    ${t('releaseDate')}: ${formatLongDate(releaseDate, locale)}`

  return (
    <>
      <NextSeo
        title={`${title} | House Boutique Records`}
        description={metaDescription}
        canonical={`https://www.houseboutiquerecords.com/releases/${query.slug}`}
        openGraph={{
          type: 'music.song',
          title: `${title} | House Boutique Records`,
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
      />
      <ReleasesSlugLayout {...props} />
    </>
  )
}

interface ReleasesSlugsResponse {
  releases: Pick<Release, 'slug'>[]
}

export const getStaticPaths: GetStaticPaths = async ({ locales = ['pt'] }) => {
  const { data } = await apolloClient.query<ReleasesSlugsResponse>({
    query: RELEASES_SLUGS
  })

  const paths = locales.flatMap(locale =>
    data.releases.map(release => ({ params: { slug: release.slug }, locale }))
  )

  return {
    paths,
    fallback: 'blocking'
  }
}

type RelatedReleasesResponse = ReleasesQueryResponse
interface RelatedReleasesVariables {
  slug: string
  artists?: string[]
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { slug } = params as Params

  const { data: releaseResponse } = await apolloClient.query<
    ReleaseSingleResponse,
    ReleaseSingleVariables
  >({ query: SINGLE_RELEASE, variables: { slug, locale } })

  const { release } = releaseResponse

  const { data: relatedReleasesResponse } = await apolloClient.query<
    RelatedReleasesResponse,
    RelatedReleasesVariables
  >({
    query: RELATED_RELEASES,
    variables: {
      slug,
      artists: release.artists.map(artist => artist.slug)
    }
  })

  const { releases: relatedReleases } = relatedReleasesResponse

  return { props: { release, relatedReleases }, revalidate: 60 }
}

export default Release
