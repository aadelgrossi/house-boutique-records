import { useQuery } from '@apollo/client'
import { startOfToday } from 'date-fns'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'

import { Badge, ReleaseCard } from '~/components'
import { ReleaseCardsSkeleton } from '~/components/Skeleton'
import { ALL_RELEASES } from '~/graphql'
import { ReleaseQueryVariables } from '~/graphql/types'
import { useTranslation } from '~/hooks'
import { Release } from '~/types'

import * as Styled from './styles'

interface LatestReleasesResponse {
  releases: Release[]
}

export const LatestReleases = () => {
  const date = startOfToday()
  const { data, loading } = useQuery<
    LatestReleasesResponse,
    ReleaseQueryVariables
  >(ALL_RELEASES, {
    variables: { date, first: 4, skip: 1, query: '', genre: '' }
  })

  const { t } = useTranslation()

  if (loading || !data) return <ReleaseCardsSkeleton />
  const latest = data?.releases

  return (
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
        {latest?.map(release => (
          <ReleaseCard key={release.id} data={release} />
        ))}
      </Styled.LatestReleasesGrid>
    </>
  )
}
