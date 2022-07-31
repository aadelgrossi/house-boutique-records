import { gql } from '@apollo/client'

export const ALL_ARTISTS = gql`
  query allArtists {
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

export const ARTISTS_SLUGS = gql`
  query artistsSlugs {
    artists {
      slug
    }
  }
`

export const SINGLE_ARTIST = gql`
  query singleArtist($slug: String!, $locale: Locale!) {
    artist(where: { slug: $slug }) {
      name
      localizations(includeCurrent: true, locales: [$locale]) {
        bio {
          raw
          text
          markdown
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
      releases(first: 4, orderBy: releaseDate_DESC) {
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
