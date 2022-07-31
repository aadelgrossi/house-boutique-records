import { ContainerBox } from '~/components'
import { Release } from '~/types'

import { RelatedReleases } from './RelatedReleases'
import { ReleaseInfo } from './ReleaseInfo'

interface ReleasesSlugLayoutProps {
  release: Release
  relatedReleases?: Release[]
}

export const ReleasesSlugLayout = (props: ReleasesSlugLayoutProps) => {
  const { release, relatedReleases } = props
  return (
    <ContainerBox>
      <ReleaseInfo release={release} />
      <RelatedReleases relatedReleases={relatedReleases} />
    </ContainerBox>
  )
}
