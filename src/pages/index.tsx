import { GetServerSideProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from 'react-multi-carousel'

import { ArtistRowList, Button, PlayButton, ReleaseCard } from '~/components'
import { responsiveCardsConfig } from '~/constants'
import { fetchHomeReleases } from '~/graphql'
import { useTranslation } from '~/hooks'
import {
  Container,
  Hero,
  Contents,
  HeroTitle,
  Title,
  ButtonGroup,
  ReleasesContainer,
  ReleasesContent,
  ReleasedContainer,
  FeaturedContainer,
  FeaturedImageWrapper,
  FeaturedInfo,
  TrackTitle,
  FeaturedContent,
  LatestReleasesContainer,
  LatestReleasesCards,
  UpcomingReleasesContainer
} from '~/styles/pages'

interface HomeProps {
  releases: {
    featured: Release
    upcoming: Release[]
    latest: Release[]
  }
}

const Home: NextPage<HomeProps> = ({
  releases: { featured, latest, upcoming }
}) => {
  const { t } = useTranslation()

  return (
    <>
      <NextSeo
        title={`House Boutique Records | ${t('officialWebsite')}`}
        description={`${t('home_heroTitle')} ${t('since')}`}
        canonical="https://www.houseboutiquerecords.com/"
        openGraph={{
          type: 'website',
          title: `House Boutique Records | ${t('officialWebsite')}`,
          url: 'https://www.houseboutiquerecords.com',
          description: `${t('home_heroTitle')} ${t('since')}`,
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
        <Hero>
          <Contents>
            <HeroTitle>{t('home_heroTitle')}</HeroTitle>
            <ButtonGroup>
              <Link href="/releases">
                <Button>{t('home_releasesButton')}</Button>
              </Link>
              <Link href="/artists">
                <Button outline>{t('home_artistsButton')}</Button>
              </Link>
            </ButtonGroup>
          </Contents>
        </Hero>

        <ReleasesContainer>
          <ReleasesContent>
            <ReleasedContainer>
              <FeaturedContainer>
                <Title>{t('home_featuredReleaseHeading')}</Title>
                <FeaturedContent>
                  <Link href={`/releases/${featured.slug}`}>
                    <FeaturedImageWrapper>
                      <Image
                        src={featured.coverArt.url as string}
                        width={250}
                        height={250}
                        layout="fixed"
                        alt={featured.title}
                      />
                    </FeaturedImageWrapper>
                  </Link>

                  <FeaturedInfo>
                    <Link href={`/releases/${featured.slug}`}>
                      <TrackTitle>{featured?.title}</TrackTitle>
                    </Link>
                    <ArtistRowList data={featured.artists} fontSize="1.2em" />
                    <PlayButton track={featured} />
                    {featured.link && (
                      <Button href={featured.link}>{t('streamNow')}</Button>
                    )}
                  </FeaturedInfo>
                </FeaturedContent>
              </FeaturedContainer>

              <LatestReleasesContainer>
                <Title>{t('home_releasesButton')}</Title>

                <LatestReleasesCards>
                  {latest.map(release => (
                    <ReleaseCard key={release.id} data={release} />
                  ))}
                </LatestReleasesCards>
              </LatestReleasesContainer>
            </ReleasedContainer>

            <UpcomingReleasesContainer>
              <Title>{t('home_upcomingReleasesHeading')}</Title>
              <div style={{ width: '100%' }}>
                <Carousel ssr responsive={responsiveCardsConfig}>
                  {upcoming.map(release => (
                    <ReleaseCard key={release.id} data={release} />
                  ))}
                </Carousel>
              </div>
            </UpcomingReleasesContainer>
          </ReleasesContent>
        </ReleasesContainer>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const releases = await fetchHomeReleases()

  return {
    props: { releases }
  }
}

export default Home
