interface Artist {
  id: string
  name: string
  slug: string
  thumb: Asset
  backgroundImage: Asset
}

interface Asset {
  url: string
}

interface Release {
  id
  title: string
  releaseDate: string
  artists: Artist[]
  link: string
  coverArt: Asset
  audioPreview: Asset
}
