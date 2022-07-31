interface RootType {
  id: string
}

interface RichText {
  text: string
  markdown: string
}

export interface Artist extends RootType {
  name: string
  slug: string
  localizations: Array<{
    bio: RichText
    locale: string
  }>
  artistPlatforms: Array<{
    id: string
    platform: string
    url: string
  }>
  thumb: Asset
  releases: Release[]
  backgroundImage: Asset
}

interface Asset {
  url: string
}

export interface Release extends RootType {
  title: string
  localizations: Array<{
    description: RichText
  }>
  description: RichText
  slug: string
  releaseDate: string
  artists: Artist[]
  link: string
  coverArt: Asset
  audioPreview: Asset
  genres: Genre[]
}

export interface Genre extends RootType {
  name: string
}
