import { ParsedUrlQuery } from 'querystring'

import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

import { ARTISTS_SLUGS, SINGLE_ARTIST } from '~/graphql'
import { apolloClient } from '~/lib/apollo'
import { ArtistsSlugLayout } from '~/sections/artists/slug/Layout'
import { Artist } from '~/types'

interface ArtistPageProps {
  artist: Artist
}

interface Params extends ParsedUrlQuery {
  slug: string
}

const Artist = ({ artist }: ArtistPageProps) => {
  const { backgroundImage, name, localizations } = artist
  const { query } = useRouter()

  return (
    <>
      <NextSeo
        title={`${name} | House Boutique Records`}
        description={localizations[0]?.bio.text}
        canonical={`https://www.houseboutiquerecords.com/artists/${query.slug}`}
        openGraph={{
          type: 'profile',
          title: `${name} | House Boutique Records`,
          description: localizations[0]?.bio.text,
          url: `https://www.houseboutiquerecords.com/artists/${query.slug}`,
          images: [
            {
              url: backgroundImage.url,
              width: 800,
              height: 600,
              alt: name
            }
          ]
        }}
      />
      <ArtistsSlugLayout artist={artist} />
    </>
  )
}

interface ArtistSlugsResponse {
  artists: Pick<Artist, 'slug'>[]
}

export const getStaticPaths: GetStaticPaths = async ({ locales = ['pt'] }) => {
  const { data } = await apolloClient.query<ArtistSlugsResponse>({
    query: ARTISTS_SLUGS
  })

  const paths = locales.flatMap(locale =>
    data?.artists.map(artist => ({ params: { slug: artist.slug }, locale }))
  )

  return {
    paths,
    fallback: 'blocking'
  }
}

interface SingleArtistResponse {
  artist: Artist
}

interface SingleArtistVariables extends Pick<Artist, 'slug'> {
  locale?: string
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { slug } = params as Params

  const {
    data: { artist }
  } = await apolloClient.query<SingleArtistResponse, SingleArtistVariables>({
    query: SINGLE_ARTIST,
    variables: { slug, locale }
  })

  return { props: { artist }, revalidate: 250 }
}

export default Artist
