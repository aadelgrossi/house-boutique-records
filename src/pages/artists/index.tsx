import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { fetchArtists } from '~/graphql'
import { useTranslation } from '~/hooks'

import {
  Container,
  Title,
  Contents,
  ArtistCard,
  ArtistButton,
  Name,
  ArtistThumb
} from './styles'

interface ArtistsPageProps {
  artists: Artist[]
}

const Artists: NextPage<ArtistsPageProps> = ({ artists }) => {
  const { t } = useTranslation()
  return (
    <Container>
      <Head>
        <title>{t('header_artists')} | House Boutique Records</title>
      </Head>

      <Title>{t('header_artists')}</Title>
      <Contents>
        {artists.map(({ id, thumb, name, slug }) => (
          <ArtistCard key={id}>
            <ArtistThumb src={thumb.url} width={500} height={500} />
            <Name>{name}</Name>
            <Link href={`artists/${slug}`}>
              <ArtistButton>{t('home_artistsReadMore')}</ArtistButton>
            </Link>
          </ArtistCard>
        ))}
      </Contents>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { artists } = await fetchArtists()

  return { props: { artists }, revalidate: 60 }
}

export default Artists
