import { FC } from 'react'

import Link from 'next/link'

import { Container, Artist } from './styles'

interface Props {
  data: Artist[]
  fontSize?: string
}

export const ArtistRowList: FC<Props> = ({ data, fontSize = '1em' }) => {
  return (
    <Container>
      {data.map(artist => (
        <Link key={artist.id} href={`/artists/${artist.slug}`}>
          <Artist style={{ fontSize }}>{artist.name}</Artist>
        </Link>
      ))}
    </Container>
  )
}
