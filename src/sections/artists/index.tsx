import { FC } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation } from '~/hooks/useTranslation'

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
  const { t } = useTranslation()

  return (
    <Container>
      <Title>{t('header_artists')}</Title>
      <Contents>
        {artists.map(artist => (
          <ArtistCard key={artist.id}>
            <ArtistThumb src={artist.thumb.url} width={500} height={500} />
            <Name>{artist.name}</Name>
            <Link href={`artists/${artist.slug}`} locale={locale}>
              <ArtistButton>{t('home_artistsReadMore')}</ArtistButton>
            </Link>
          </ArtistCard>
        ))}
      </Contents>
    </Container>
  )
}
