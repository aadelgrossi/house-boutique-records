import { gql } from '@apollo/client'

export const LATEST_RELEASE = gql`
  query latestRelease($date: Date!) {
    releases(
      where: { releaseDate_lte: $date }
      orderBy: releaseDate_DESC
      first: 1
    ) {
      id
      title
      slug
      releaseDate
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
    }
  }
`

export const UPCOMING_RELEASES = gql`
  query upcomingReleases(
    $query: String
    $genre: String
    $date: Date!
    $first: Int!
  ) {
    releases(
      where: {
        releaseDate_gt: $date
        genres_some: { name_contains: $genre }
        OR: [
          { title_contains: $query }
          { artists_some: { name_contains: $query } }
        ]
      }
      orderBy: releaseDate_ASC
      first: $first
    ) {
      id
      title
      slug
      releaseDate
      artists {
        id
        name
        slug
      }
      link
      coverArt {
        url
      }
      audioPreview {
        url
      }
    }
  }
`

export const ALL_RELEASES = gql`
  query allReleases(
    $query: String
    $date: Date
    $genre: String
    $first: Int
    $skip: Int
  ) {
    releases(
      where: {
        releaseDate_lte: $date
        genres_some: { name_contains: $genre }
        OR: [
          { title_contains: $query }
          { artists_some: { name_contains: $query } }
        ]
      }
      first: $first
      skip: $skip
      orderBy: releaseDate_DESC
    ) {
      id
      title
      slug
      releaseDate
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
    }
  }
`

export const RELEASES_SLUGS = gql`
  query releasesSlugs {
    releases {
      slug
    }
  }
`

export const SINGLE_RELEASE = gql`
  query singleRelease($slug: String!, $locale: Locale!) {
    release(where: { slug: $slug }) {
      id
      title
      releaseDate
      localizations(includeCurrent: true, locales: [$locale]) {
        description {
          raw
          text
          markdown
        }
        locale
      }
      link
      artists {
        id
        slug
        name
      }
      coverArt {
        url
      }
      audioPreview {
        url
      }
      genres {
        id
        name
      }
    }
  }
`

export const RELATED_RELEASES = gql`
  query relatedReleases($slug: String!, $artists: [String!]) {
    releases(
      where: { artists_some: { slug_in: $artists }, slug_not: $slug }
      first: 4
      orderBy: releaseDate_DESC
    ) {
      id
      title
      slug
      releaseDate
      artists {
        id
        slug
        name
      }
      coverArt {
        url
      }
      audioPreview {
        url
      }
    }
  }
`
