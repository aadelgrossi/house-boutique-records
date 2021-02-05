import { GetStaticProps, NextPage } from 'next'

import { fetchArtists, fetchLatestReleases } from '~/graphql'
import { Hero, Artists, Releases } from '~/sections'
import { Container } from '~/styles/pages'

interface HomeProps {
  releases: {
    featured: Release
    upcoming: Release[]
    latest: Release[]
  }
  artists: Artist[]
}

const Home: NextPage<HomeProps> = ({ artists, releases }) => {
  return (
    <Container>
      <Hero />
      <Releases {...releases} />
      <Artists artists={artists} />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const releases = await fetchLatestReleases()
  const { artists } = await fetchArtists()

  return {
    props: { releases, artists }
  }
}

export default Home
