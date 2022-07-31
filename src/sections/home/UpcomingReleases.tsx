import { useQuery } from '@apollo/client'
import { startOfToday } from 'date-fns'

import { ReleaseCard } from '~/components'
import { ReleaseCardsSkeleton } from '~/components/Skeleton'
import { UPCOMING_RELEASES } from '~/graphql'
import { ReleaseQueryVariables } from '~/graphql/types'
import { useTranslation } from '~/hooks'
import { Release } from '~/types'

import * as Styled from './styles'

interface UpcomingReleasesResponse {
  releases: Release[]
}

export const UpcomingReleases = () => {
  const date = startOfToday()
  const { data, loading } = useQuery<
    UpcomingReleasesResponse,
    ReleaseQueryVariables
  >(UPCOMING_RELEASES, { variables: { date, first: 4, genre: '', query: '' } })

  const { t } = useTranslation()

  if (loading) return <ReleaseCardsSkeleton />
  if (!data?.releases.length) return null

  const { releases: upcoming } = data

  return (
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
  )
}
