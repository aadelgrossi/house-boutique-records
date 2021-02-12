import { ParsedUrlQuery } from 'querystring'

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Carousel from 'react-multi-carousel'

import { SocialIcon, ReleaseCard } from '~/components'
import { responsiveCardsConfig } from '~/constants'
import { fetchArtists, fetchSingleArtist } from '~/graphql'
import { useTranslation } from '~/hooks'

import {
  Container,
  Content,
  Bio,
  Name,
  ImageContainer,
  ArtistSocials,
  ArtistHeader,
  ReleasesContainer,
  Title
} from './styles'

interface ArtistPageProps {
  artist: Artist
}

interface Params extends ParsedUrlQuery {
  slug: string
}

const Artist: NextPage<ArtistPageProps> = ({
  artist: { backgroundImage, name, localizations, artistPlatforms, releases }
}) => {
  const { t } = useTranslation()
  const { query } = useRouter()

  return (
    <>
      <NextSeo
        title={`${name} | House Boutique Records`}
        description={localizations[0]?.bio.text}
        canonical={`https://www.houseboutiquerecords.com/artists/${query.slug}`}
        openGraph={{
          url: `https://www.houseboutiquerecords.com/artists/${query.slug}`,
          images: [
            {
              url: backgroundImage.url,
              width: 800,
              height: 600,
              alt: name
            }
          ]
        }}
      />
      <Container>
        <Head>
          <title>{name} | House Boutique Records</title>
        </Head>
        <ImageContainer>
          <Image
            src={backgroundImage.url}
            layout="responsive"
            width={1200}
            height={750}
            alt={name}
          />
        </ImageContainer>
        <Content>
          <ArtistHeader>
            <ArtistSocials>
              {artistPlatforms.map(platform => (
                <SocialIcon key={platform.id} {...platform} />
              ))}
            </ArtistSocials>
            <Name>{name}</Name>
          </ArtistHeader>
          <Bio allowDangerousHtml={true}>{localizations[0]?.bio.html}</Bio>
          <ReleasesContainer>
            <Title>
              {t('artists_tracksBy')}
              {` ${name}`}
            </Title>
            <Carousel responsive={responsiveCardsConfig}>
              {releases.map(release => (
                <ReleaseCard key={release.id} data={release} />
              ))}
            </Carousel>
          </ReleasesContainer>
        </Content>
      </Container>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async ({ locales = ['pt'] }) => {
  const { artists } = await fetchArtists()

  const paths = locales.flatMap(locale =>
    artists.map(artist => ({ params: { slug: artist.slug }, locale }))
  )

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { slug } = params as Params

  const { artist } = await fetchSingleArtist({ slug, locale })

  return { props: { artist }, revalidate: 100 }
}

export default Artist
