import { gql } from 'graphql-request'

import graphCmsClient from '~/lib/graphCmsClient'

import {
  ArtistsQueryResponse,
  ArtistSingleQueryResponse,
  ArtistSingleQueryParams
} from './types'

const ALL_ARTISTS = gql`
  query {
    artists {
      id
      name
      slug
      thumb {
        url
      }
    }
  }
`

const SINGLE_ARTIST = gql`
  query singleArtist($slug: String!, $locale: Locale!) {
    artist(where: { slug: $slug }) {
      name
      localizations(includeCurrent: true, locales: [$locale]) {
        bio {
          html
          text
        }
        locale
      }
      backgroundImage {
        url
      }
      artistPlatforms {
        id
        platform
        url
      }
      releases(first: 5, orderBy: releaseDate_DESC) {
        id
        title
        slug
        artists {
          id
          name
          slug
        }
        coverArt {
          url
        }
        audioPreview {
          url
        }
        releaseDate
      }
    }
  }
`

export const fetchArtists = async (): Promise<ArtistsQueryResponse> => {
  return await graphCmsClient.request<ArtistsQueryResponse>(ALL_ARTISTS)
}

export const fetchSingleArtist = async ({
  slug,
  locale = 'pt'
}: ArtistSingleQueryParams): Promise<ArtistSingleQueryResponse> => {
  return await graphCmsClient.request<ArtistSingleQueryResponse>(
    SINGLE_ARTIST,
    { slug, locale }
  )
}
