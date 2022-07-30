import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Slider, { Settings } from 'react-slick'

import { fetchArtists } from '~/graphql'
import { useTranslation } from '~/hooks'
import * as Styled from '~/styles/pages/artists/index'

interface ArtistsPageProps {
  artists: Artist[]
}

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

const Artists = ({ artists }: ArtistsPageProps) => {
  const { t } = useTranslation()

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
      <Styled.Container>
        <Styled.Title>{t('header_artists')}</Styled.Title>
        <Styled.Contents>
          <Slider {...settings}>
            {artists.map(({ id, thumb, name, slug }) => (
              <Styled.ArtistCard key={id}>
                <Styled.ArtistThumb src={thumb.url} width={500} height={500} />
                <Styled.Name>{name}</Styled.Name>
                <Link href={`artists/${slug}`} passHref>
                  <Styled.ArtistButton>
                    {t('home_artistsReadMore')}
                  </Styled.ArtistButton>
                </Link>
              </Styled.ArtistCard>
            ))}
          </Slider>
        </Styled.Contents>
      </Styled.Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { artists } = await fetchArtists()

  return { props: { artists }, revalidate: 60 }
}

export default Artists
