import Link from 'next/link'

import { Container, Artist } from './styles'

interface ArtistRowListProps {
  data: Artist[]
  fontSize?: string
}

export const ArtistRowList = (props: ArtistRowListProps) => {
  const { data, fontSize = '1em' } = props
  return (
    <Container>
      {data.map(artist => (
        <Link key={artist.id} href={`/artists/${artist.slug}`} passHref>
          <Artist style={{ fontSize }}>{artist.name}</Artist>
        </Link>
      ))}
    </Container>
  )
}
