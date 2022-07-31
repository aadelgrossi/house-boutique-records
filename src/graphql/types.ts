import { Release } from '~/types'

export interface ReleaseSingleResponse {
  release: Release
}

export interface ReleasesQueryResponse {
  releases: Release[]
}

interface Pagination {
  aggregate: {
    count: number
  }
  pageInfo: {
    pageSize: number
    hasNextPage: boolean
  }
}
export interface AllReleasesQueryResponse {
  releasesConnection: Pagination & {
    edges: Array<{
      cursor: string
      node: Release
    }>
  }
}

export interface ReleaseSingleVariables extends Pick<Release, 'slug'> {
  locale?: string
}

export interface ReleaseSingleQueryResponse {
  release: Release
}

export interface ReleaseRelatedQueryParams {
  slug: string
  artists: string[]
}

export interface ReleaseQueryVariables {
  date?: Date
  genre?: string
  first?: number
  after?: string | null
  skip?: number
  query?: string
}
