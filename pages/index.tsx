import { GetServerSideProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'

import {
  ArtistRowList,
  Badge,
  Button,
  PlayButton,
  ReleaseCard
} from '~/components'
import {
  Featured as FeaturedSkeleton,
  Cards as ReleaseCardsSkeleton
} from '~/components/Skeleton'
import { fetchHomeReleases } from '~/graphql'
import { useTranslation } from '~/hooks'
import {
  Container,
  Hero,
  Contents,
  HeroTitle,
  ButtonGroup,
  ReleasesContainer,
  ReleasesContent,
  FeaturedContainer,
  FeaturedImageWrapper,
  FeaturedInfo,
  TrackTitle,
  TitleGroup,
  FeaturedTitle,
  FeaturedContent,
  LatestReleasesContainer,
  UpcomingReleasesGrid,
  LatestReleasesGrid,
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
        description={`${t('metaDescription')}`}
        canonical="https://www.houseboutiquerecords.com/"
        openGraph={{
          type: 'website',
          title: `House Boutique Records | ${t('officialWebsite')}`,
          url: 'https://www.houseboutiquerecords.com',
          description: `${t('metaDescription')}`,
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
            <HeroTitle>
              {t('home_heroTitle')}
              <br /> {t('home_heroTitle2')}
              <br /> {t('home_heroTitle3')}
              <br /> {t('home_heroTitle4')}
            </HeroTitle>
            <ButtonGroup>
              <Link href="/releases" passHref>
                <Button>{t('home_releasesButton')}</Button>
              </Link>

              <Link href="/artists" passHref>
                <Button outline>{t('home_artistsButton')}</Button>
              </Link>
            </ButtonGroup>
          </Contents>
        </Hero>

        <ReleasesContainer>
          <ReleasesContent>
            <FeaturedContainer>
              {featured ? (
                <>
                  <TitleGroup>
                    <FeaturedTitle>
                      {t('home_featuredReleaseHeading')}
                    </FeaturedTitle>
                  </TitleGroup>
                  <FeaturedContent>
                    <Link href={`/releases/${featured.slug}`}>
                      <FeaturedImageWrapper>
                        <Image
                          src={featured.coverArt.url as string}
                          width={280}
                          height={280}
                          layout="responsive"
                          alt={featured.title}
                        />
                      </FeaturedImageWrapper>
                    </Link>

                    <FeaturedInfo>
                      <Link href={`/releases/${featured.slug}`} passHref>
                        <TrackTitle>{featured?.title}</TrackTitle>
                      </Link>
                      <ArtistRowList data={featured.artists} fontSize="1.2em" />
                      <PlayButton track={featured} />
                      {featured.link && (
                        <Button
                          href={featured.link}
                          style={{ marginTop: '3rem' }}
                        >
                          {t('streamNow')}
                        </Button>
                      )}
                    </FeaturedInfo>
                  </FeaturedContent>
                </>
              ) : (
                <FeaturedSkeleton />
              )}
            </FeaturedContainer>
            <LatestReleasesContainer>
              {latest ? (
                <>
                  <TitleGroup>
                    <h2>{t('home_latestReleasesHeading')}</h2>
                    <Link
                      href={{
                        pathname: '/releases',
                        query: { type: 'available' }
                      }}
                      passHref
                    >
                      <Badge style={{ cursor: 'pointer' }}>
                        {t('seeAll')}
                        <FaChevronRight style={{ marginLeft: 4 }} size="12px" />
                      </Badge>
                    </Link>
                  </TitleGroup>

                  <LatestReleasesGrid>
                    {latest.map(release => (
                      <ReleaseCard key={release.id} data={release} />
                    ))}
                  </LatestReleasesGrid>
                </>
              ) : (
                <ReleaseCardsSkeleton />
              )}
            </LatestReleasesContainer>

            {!upcoming && <ReleaseCardsSkeleton />}

            {upcoming.length ? (
              <UpcomingReleasesContainer>
                <TitleGroup>
                  <h2>{t('home_upcomingReleasesHeading')}</h2>
                </TitleGroup>

                <UpcomingReleasesGrid>
                  {upcoming.map(release => (
                    <ReleaseCard key={release.id} data={release} />
                  ))}
                </UpcomingReleasesGrid>
              </UpcomingReleasesContainer>
            ) : null}
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
