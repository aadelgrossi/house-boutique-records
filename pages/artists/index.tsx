import { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Slider, { Settings } from 'react-slick'

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
  const settings: Settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <>
      <NextSeo
        title={`${t('header_artists')} | House Boutique Records`}
        description={`${t('artistsMetaDescription')}`}
        canonical="https://www.houseboutiquerecords.com/artists"
        openGraph={{
          type: 'website',
          title: `${t('header_artists')} | House Boutique Records`,
          url: 'https://www.houseboutiquerecords.com/artists',
          description: `${t('artistsMetaDescription')}`,
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          images: [
            {
              url: 'https://www.houseboutiquerecords.com/hb-light.jpg',
              width: 1200,
              height: 630,
              alt: 'House Boutique Records'
            }
          ]
        }}
      />
      <Container>
        <Title>{t('header_artists')}</Title>
        <Contents>
          <Slider {...settings}>
            {artists.map(({ id, thumb, name, slug }) => (
              <ArtistCard key={id}>
                <ArtistThumb src={thumb.url} width={500} height={500} />
                <Name>{name}</Name>
                <Link href={`artists/${slug}`} passHref>
                  <ArtistButton>{t('home_artistsReadMore')}</ArtistButton>
                </Link>
              </ArtistCard>
            ))}
          </Slider>
        </Contents>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { artists } = await fetchArtists()

  return { props: { artists }, revalidate: 60 }
}

export default Artists
