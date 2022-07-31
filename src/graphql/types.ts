import { Release } from '~/types'

export interface ReleaseSingleResponse {
  release: Release
}

export interface ReleasesQueryResponse {
  releases: Release[]
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
  skip?: number
  query: string
}
