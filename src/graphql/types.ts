export type ReleasesHomeQueryResponse = {
  featured: Release
  upcoming: Release[]
  latest: Release[]
}

export type ArtistsQueryResponse = {
  artists: Artist[]
}

export type ArtistSingleQueryParams = {
  slug: string
  locale?: string
}

export type ArtistSingleQueryResponse = {
  artist: Artist
}

export type ReleasesQueryParams = {
  query: string
  date?: Date
}

export type ReleasesQueryResponse = {
  releases: Release[]
}
