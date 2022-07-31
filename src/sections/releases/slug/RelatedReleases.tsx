import { ReleaseCard, ReleasesGrid } from '~/components'
import { useTranslation } from '~/hooks'
import { Release } from '~/types'

import * as Styled from './styles'

interface RelatedReleasesProps {
  relatedReleases?: Release[]
}

export const RelatedReleases = ({
  relatedReleases = []
}: RelatedReleasesProps) => {
  const { t } = useTranslation()

  if (!relatedReleases.length) return null
  return (
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
  )
}
