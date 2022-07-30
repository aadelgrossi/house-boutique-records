import { ParsedUrlQuery } from 'querystring'

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import rehypeRaw from 'rehype-raw'

import {
  Button,
  ReleaseCard,
  ArtistRowList,
  PlayButton,
  ContainerBox,
  ReleasesGrid,
  Badge
} from '~/components'
import {
  fetchReleases,
  fetchRelatedReleases,
  fetchSingleRelease
} from '~/graphql'
import { useTranslation } from '~/hooks'
import * as Styled from '~/styles/pages/releases/slug'
import { formatLongDate } from '~/utils'

interface ReleasePageProps {
  release: Release
  relatedReleases?: Release[]
}

interface Params extends ParsedUrlQuery {
  slug: string
}

const Release: NextPage<ReleasePageProps> = ({ release, relatedReleases }) => {
  const { title, artists, localizations, coverArt, link, releaseDate, genres } =
    release
  const { t } = useTranslation()
  const { locale, query } = useRouter()

  const artistsNames = artists.flatMap(artist => artist.name).join(', ')

  const metaDescription = `"${title}" ${t('by')} ${artistsNames}.
    ${t('releaseDate')}: ${formatLongDate(releaseDate, locale)}`

  return (
    <>
      <NextSeo
        title={`${title} | House Boutique Records`}
        description={metaDescription}
        canonical={`https://www.houseboutiquerecords.com/releases/${query.slug}`}
        openGraph={{
          type: 'music.song',
          title: `${title} | House Boutique Records`,
          description: metaDescription,
          url: `https://www.houseboutiquerecords.com/releases/${query.slug}`,
          images: [
            {
              url: coverArt.url,
              width: 500,
              height: 500,
              alt: title
            }
          ]
        }}
      />
      <ContainerBox>
        <Head>
          <title>{title} | House Boutique Records</title>
        </Head>
        <Styled.ReleaseInfo>
          <Styled.ImageContainer>
            <Image src={coverArt.url} width={300} height={300} alt={title} />
          </Styled.ImageContainer>
          <Styled.Details>
            <Styled.Genres>
              {genres.map(({ id, name }) => (
                <Badge key={id}>{name.replace('_', ' ')}</Badge>
              ))}
            </Styled.Genres>

            <Styled.ReleaseTitle>{title}</Styled.ReleaseTitle>

            <ArtistRowList data={artists} fontSize="1rem" />

            <Styled.Description rehypePlugins={[rehypeRaw]}>
              {localizations[0]?.description?.html}
            </Styled.Description>

            <PlayButton track={release} />

            <Styled.ReleaseDate>
              <strong>{t('releaseDate')}</strong>
              <p>{formatLongDate(releaseDate, locale)}</p>
            </Styled.ReleaseDate>

            {link && <Button href={link}>{t('streamNow')}</Button>}
          </Styled.Details>
        </Styled.ReleaseInfo>

        <Styled.RelatedReleasesContainer>
          <Styled.RelatedReleasesTitle>
            {t('relatedReleases')}
          </Styled.RelatedReleasesTitle>
          <ReleasesGrid>
            {relatedReleases?.map(related => (
              <ReleaseCard key={related.id} data={related} />
            ))}
          </ReleasesGrid>
        </Styled.RelatedReleasesContainer>
      </ContainerBox>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async ({ locales = ['pt'] }) => {
  const { releases } = await fetchReleases({})

  const paths = locales.flatMap(locale =>
    releases.map(release => ({ params: { slug: release.slug }, locale }))
  )

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { slug } = params as Params

  const { release } = await fetchSingleRelease({ slug, locale })

  const { artists } = release

  const { releases: relatedReleases } = await fetchRelatedReleases({
    slug,
    artists: artists.map(a => a.slug)
  })

  return { props: { release, relatedReleases }, revalidate: 60 }
}

export default Release
