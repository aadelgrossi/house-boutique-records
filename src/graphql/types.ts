export type ReleasesQueryResponse = {
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
