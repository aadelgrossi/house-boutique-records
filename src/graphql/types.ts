export type ReleasesQueryResponse = {
  featured: Release
  upcoming: Release[]
  latest: Release[]
}

export type ArtistsQueryResponse = {
  artists: Artist[]
}
