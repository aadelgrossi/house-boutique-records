interface Artist {
  id: string
  name: string
  slug: string
  localizations: Array<{
    bio: Markdown
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

interface Markdown {
  html: string
  text: string
}

interface Release {
  id: string
  title: string
  localizations: Array<{
    description: Markdown
  }>
  description: Markdown
  slug: string
  releaseDate: string
  artists: Artist[]
  link: string
  coverArt: Asset
  audioPreview: Asset
  genres: string[]
}
