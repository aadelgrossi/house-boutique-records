import { GetStaticProps, NextPage } from 'next'

import { fetchLatestReleases } from '~/graphql'
import { Hero, Releases } from '~/sections'
import { Container } from '~/styles/pages'

interface HomeProps {
  releases: {
    featured: Release
    upcoming: Release[]
    latest: Release[]
  }
}

const Home: NextPage<HomeProps> = ({ releases }) => {
  return (
    <Container>
      <Hero />
      <Releases {...releases} />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const releases = await fetchLatestReleases()

  return {
    props: { releases }
  }
}

export default Home
