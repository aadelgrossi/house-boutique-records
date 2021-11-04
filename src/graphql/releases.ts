import { startOfToday } from 'date-fns'
import { gql } from 'graphql-request'

import graphCmsClient from '~/lib/graphCmsClient'

import {
  ReleasesQueryParams,
  ReleasesQueryResponse,
  ReleasesHomeQueryResponse,
  ReleaseSingleQueryParams,
  ReleaseSingleQueryResponse,
  ReleaseRelatedQueryParams,
  QueryVariables
} from './types'

const UPCOMING = gql`
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

const RELEASED = gql`
  query latestReleases(
    $query: String
    $genre: String
    $date: Date!
    $first: Int
  ) {
    releases(
      where: {
        releaseDate_lte: $date
        OR: [
          { genres_some: { name_contains: $genre } }
          { title_contains: $query }
          { artists_some: { name_contains: $query } }
        ]
      }
      orderBy: releaseDate_DESC
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

const ALL = gql`
  query allReleases($query: String, $genre: String) {
    releases(
      where: {
        genres_some: { name_contains: $genre }
        OR: [
          { title_contains: $query }
          { artists_some: { name_contains: $query } }
        ]
      }
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

const SINGLE_RELEASE = gql`
  query singleRelease($slug: String!, $locale: Locale!) {
    release(where: { slug: $slug }) {
      id
      title
      releaseDate
      localizations(includeCurrent: true, locales: [$locale]) {
        description {
          html
          text
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
        name
      }
    }
  }
`

const RELATED = gql`
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

export const fetchReleases = async ({
  query = '',
  genre = '',
  type
}: ReleasesQueryParams): Promise<ReleasesQueryResponse> => {
  switch (type) {
    case 'available': {
      const { releases } = await fetchReleasedReleases({ query, genre })
      return { releases }
    }
    case 'upcoming': {
      const { releases } = await fetchUpcomingReleases({ query, genre })
      return { releases }
    }
    default: {
      const { releases } = await graphCmsClient.request<ReleasesQueryResponse>(
        ALL,
        { query, genre }
      )
      return { releases }
    }
  }
}

export const fetchHomeReleases = async (): Promise<ReleasesHomeQueryResponse> => {
  const { releases: upcoming } = await fetchUpcomingReleases({ first: 4 })
  const { releases: latest } = await fetchReleasedReleases({ first: 4 })

  return {
    featured: latest[0],
    latest: latest.slice(1),
    upcoming
  }
}

export const fetchSingleRelease = async ({
  slug,
  locale = 'pt'
}: ReleaseSingleQueryParams): Promise<ReleaseSingleQueryResponse> => {
  return await graphCmsClient.request<ReleaseSingleQueryResponse>(
    SINGLE_RELEASE,
    { slug, locale }
  )
}

export const fetchRelatedReleases = async ({
  slug,
  artists
}: ReleaseRelatedQueryParams): Promise<ReleasesQueryResponse> => {
  return await graphCmsClient.request<ReleasesQueryResponse>(RELATED, {
    slug,
    artists
  })
}

export const fetchUpcomingReleases = async ({
  query = '',
  first = 20,
  genre
}: ReleasesQueryParams): Promise<ReleasesQueryResponse> => {
  const date = startOfToday().toISOString().slice(0, 10)

  return await graphCmsClient.request<ReleasesQueryResponse, QueryVariables>(
    UPCOMING,
    {
      date,
      genre,
      query,
      first
    }
  )
}

export const fetchReleasedReleases = async ({
  query = '',
  first = 20,
  genre
}: ReleasesQueryParams): Promise<ReleasesQueryResponse> => {
  const date = startOfToday().toISOString().slice(0, 10)

  return await graphCmsClient.request<ReleasesQueryResponse, QueryVariables>(
    RELEASED,
    {
      date,
      genre,
      query,
      first
    }
  )
}
