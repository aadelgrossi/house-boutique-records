import { gql } from 'graphql-request'

import graphCmsClient from '~/lib/graphCmsClient'

import {
  ReleasesQueryParams,
  ReleasesQueryResponse,
  ReleasesHomeQueryResponse
} from './types'

const UPCOMING_RELEASES = gql`
  query upcomingReleases($date: Date!, $first: Int!) {
    releases(
      where: { releaseDate_gt: $date }
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

const LATEST_RELEASES = gql`
  query latestReleases($date: Date!, $first: Int!) {
    releases(
      where: { releaseDate_lte: $date }
      orderBy: releaseDate_DESC
      first: $first
    ) {
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

const RELEASES = gql`
  query allReleases($query: String) {
    releases(
      where: {
        OR: [
          { title_contains: $query }
          { artists_some: { name_contains: $query } }
        ]
      }
    ) {
      title
      slug
      releaseDate
      artists {
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

export const fetchAllReleases = async ({
  query,
  date
}: ReleasesQueryParams): Promise<ReleasesQueryResponse> => {
  const { releases } = await graphCmsClient.request<{
    releases: Release[]
  }>(RELEASES, { query, date })

  return { releases }
}

export const fetchLatestReleases = async (): Promise<ReleasesHomeQueryResponse> => {
  const today = new Date().toISOString().slice(0, 10)

  const { releases: upcoming } = await graphCmsClient.request<{
    releases: Release[]
  }>(UPCOMING_RELEASES, { date: today, first: 4 })

  const { releases: latest } = await graphCmsClient.request<{
    releases: Release[]
  }>(LATEST_RELEASES, { date: today, first: 5 })

  return {
    featured: latest[0],
    latest: latest.slice(1),
    upcoming
  }
}
