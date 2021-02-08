export type ReleasesHomeQueryResponse = {
  featured: Release
  upcoming: Release[]
  latest: Release[]
}

export type ReleasesQueryParams = {
  query?: string
  date?: Date
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
