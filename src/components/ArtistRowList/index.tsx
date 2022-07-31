import Link from 'next/link'

import { Artist } from '~/types'

import { Container, ArtistLink } from './styles'

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
          <ArtistLink style={{ fontSize }}>{artist.name}</ArtistLink>
        </Link>
      ))}
    </Container>
  )
}
