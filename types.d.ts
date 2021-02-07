interface Artist {
  id: string
  name: string
  slug: string
  localizations: Array<{
    bio: {
      html: string
    }
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

interface Release {
  id: string
  title: string
  slug: string
  releaseDate: string
  artists: Artist[]
  link: string
  coverArt: Asset
  audioPreview: Asset
}
