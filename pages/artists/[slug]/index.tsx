import { ParsedUrlQuery } from 'querystring'

import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaChevronRight } from 'react-icons/fa'
import rehypeRaw from 'rehype-raw'

import { SocialIcon, ReleaseCard, ReleasesGrid, Badge } from '~/components'
import { fetchArtists, fetchSingleArtist } from '~/graphql'
import { useTranslation } from '~/hooks'
import * as Styled from '~/styles/pages/artists/slug'

interface ArtistPageProps {
  artist: Artist
}

interface Params extends ParsedUrlQuery {
  slug: string
}

const Artist = ({ artist }: ArtistPageProps) => {
  const { backgroundImage, name, localizations, artistPlatforms, releases } =
    artist
  const { t } = useTranslation()
  const { query } = useRouter()

  return (
    <>
      <NextSeo
        title={`${name} | House Boutique Records`}
        description={localizations[0]?.bio.text}
        canonical={`https://www.houseboutiquerecords.com/artists/${query.slug}`}
        openGraph={{
          type: 'profile',
          title: `${name} | House Boutique Records`,
          description: localizations[0]?.bio.text,
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
      <Styled.Container>
        <Head>
          <title>{name} | House Boutique Records</title>
        </Head>
        <Styled.ImageContainer>
          <Image
            src={backgroundImage.url}
            layout="responsive"
            width={1200}
            height={750}
            alt={name}
          />
        </Styled.ImageContainer>
        <Styled.Content>
          <Styled.ArtistHeader>
            <Styled.ArtistSocials>
              {artistPlatforms.map(platform => (
                <SocialIcon key={platform.id} {...platform} />
              ))}
            </Styled.ArtistSocials>
            <Styled.Name>{name}</Styled.Name>
          </Styled.ArtistHeader>
          <Styled.Bio rehypePlugins={[rehypeRaw]}>
            {localizations[0]?.bio.html}
          </Styled.Bio>
          <Styled.ReleasesContainer>
            <Styled.TitleGroup>
              <Styled.Title>
                {t('artists_tracksBy')}
                {` ${name}`}
              </Styled.Title>
              <Link href={{ pathname: '/releases', query: { search: name } }}>
                <Badge style={{ cursor: 'pointer' }}>
                  {t('seeAll')}
                  <FaChevronRight style={{ marginLeft: 4 }} size="12px" />
                </Badge>
              </Link>
            </Styled.TitleGroup>
            <ReleasesGrid>
              {releases.map(release => (
                <ReleaseCard key={release.id} data={release} />
              ))}
            </ReleasesGrid>
          </Styled.ReleasesContainer>
        </Styled.Content>
      </Styled.Container>
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
