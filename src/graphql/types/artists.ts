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
