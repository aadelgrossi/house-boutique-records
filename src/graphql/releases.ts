import { gql } from 'graphql-request'

import graphCmsClient from '~/lib/graphCmsClient'

import { ReleasesQueryResponse } from './types'

const UPCOMING_RELEASES = gql`
  query upcomingReleases($date: Date!, $first: Int!) {
    releases(
      where: { releaseDate_gt: $date }
      orderBy: releaseDate_ASC
      first: $first
    ) {
      id
      title
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

export const fetchLatestReleases = async (): Promise<ReleasesQueryResponse> => {
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
