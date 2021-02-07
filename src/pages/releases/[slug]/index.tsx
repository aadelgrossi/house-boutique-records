import { ParsedUrlQuery } from 'querystring'

import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import {
  fetchAllReleases,
  fetchRelatedReleases,
  fetchSingleRelease
} from '~/graphql'

import { Container, Content } from './styles'

interface ReleasePageProps {
  release: Release
  relatedReleases?: Release[]
}

interface Params extends ParsedUrlQuery {
  slug: string
}

const Release: NextPage<ReleasePageProps> = ({ release, relatedReleases }) => {
  return (
    <Container>
      <Content>
        <h1>{release.title}</h1>

        <p>{relatedReleases?.map(related => related.title)}</p>
      </Content>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { releases } = await fetchAllReleases({})

  return {
    paths: releases.map(release => ({ params: { slug: release.slug } })),
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

  return { props: { release, relatedReleases } }
}

export default Release
