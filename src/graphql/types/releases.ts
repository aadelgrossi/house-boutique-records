export type ReleasesHomeQueryResponse = {
  featured: Release
  upcoming: Release[]
  latest: Release[]
}

export type ReleasesQueryParams = {
  query?: string
  type?: 'all' | 'available' | 'upcoming'
  first?: number
}

export type ReleasesQueryResponse = {
  releases: Release[]
}

export type ReleaseSingleQueryParams = {
  slug: string
  locale?: string
}

export type ReleaseSingleQueryResponse = {
  release: Release
}

export type ReleaseRelatedQueryParams = {
  slug: string
  artists: string[]
}

export type QueryVariables = {
  date: string
  first?: number
  query: string
}
