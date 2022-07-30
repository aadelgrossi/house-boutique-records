import { GetServerSideProps } from 'next'
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
import * as Styled from '~/styles/pages/index'

interface HomeProps {
  releases: {
    featured?: Release
    upcoming: Release[]
    latest: Release[]
  }
}

const Home = ({ releases }: HomeProps) => {
  const { featured, latest, upcoming } = releases
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
      <Styled.Container>
        <Styled.Hero>
          <Styled.Contents>
            <Styled.HeroTitle>
              {t('home_heroTitle')}
              <br /> {t('home_heroTitle2')}
              <br /> {t('home_heroTitle3')}
              <br /> {t('home_heroTitle4')}
            </Styled.HeroTitle>
            <Styled.ButtonGroup>
              <Link href="/releases" passHref>
                <Button>{t('home_releasesButton')}</Button>
              </Link>

              <Link href="/artists" passHref>
                <Button outline>{t('home_artistsButton')}</Button>
              </Link>
            </Styled.ButtonGroup>
          </Styled.Contents>
        </Styled.Hero>

        <Styled.ReleasesContainer>
          <Styled.ReleasesContent>
            <Styled.FeaturedContainer>
              {featured ? (
                <>
                  <Styled.TitleGroup>
                    <Styled.FeaturedTitle>
                      {t('home_featuredReleaseHeading')}
                    </Styled.FeaturedTitle>
                  </Styled.TitleGroup>
                  <Styled.FeaturedContent>
                    <Link href={`/releases/${featured.slug}`}>
                      <Styled.FeaturedImageWrapper>
                        <Image
                          src={featured.coverArt.url as string}
                          width={280}
                          height={280}
                          layout="responsive"
                          alt={featured.title}
                        />
                      </Styled.FeaturedImageWrapper>
                    </Link>

                    <Styled.FeaturedInfo>
                      <Link href={`/releases/${featured.slug}`} passHref>
                        <Styled.TrackTitle>{featured?.title}</Styled.TrackTitle>
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
                    </Styled.FeaturedInfo>
                  </Styled.FeaturedContent>
                </>
              ) : (
                <FeaturedSkeleton />
              )}
            </Styled.FeaturedContainer>
            <Styled.LatestReleasesContainer>
              {latest ? (
                <>
                  <Styled.TitleGroup>
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
                  </Styled.TitleGroup>

                  <Styled.LatestReleasesGrid>
                    {latest.map(release => (
                      <ReleaseCard key={release.id} data={release} />
                    ))}
                  </Styled.LatestReleasesGrid>
                </>
              ) : (
                <ReleaseCardsSkeleton />
              )}
            </Styled.LatestReleasesContainer>

            {!upcoming && <ReleaseCardsSkeleton />}

            {upcoming.length ? (
              <Styled.UpcomingReleasesContainer>
                <Styled.TitleGroup>
                  <h2>{t('home_upcomingReleasesHeading')}</h2>
                </Styled.TitleGroup>

                <Styled.UpcomingReleasesGrid>
                  {upcoming.map(release => (
                    <ReleaseCard key={release.id} data={release} />
                  ))}
                </Styled.UpcomingReleasesGrid>
              </Styled.UpcomingReleasesContainer>
            ) : null}
          </Styled.ReleasesContent>
        </Styled.ReleasesContainer>
      </Styled.Container>
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
