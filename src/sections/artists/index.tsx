import { FC } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  Container,
  Contents,
  ArtistCard,
  ArtistThumb,
  Name,
  Title,
  ArtistButton
} from './styles'

type Props = {
  artists: Artist[]
}
export const Artists: FC<Props> = ({ artists }) => {
  const { locale } = useRouter()

  return (
    <Container>
      <Title>Artists</Title>
      <Contents>
        {artists.map(artist => (
          <ArtistCard key={artist.id}>
            <ArtistThumb src={artist.thumb.url} width={500} height={500} />
            <Name>{artist.name}</Name>
            <Link href={`artists/${artist.slug}`} locale={locale}>
              <ArtistButton>Go to Page</ArtistButton>
            </Link>
          </ArtistCard>
        ))}
      </Contents>
    </Container>
  )
}
