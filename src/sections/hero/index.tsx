import React from 'react'

import { Button } from '~/components'
import { useTranslation } from '~/hooks'

import { Container, Title, ButtonGroup, Contents } from './styles'

export const Hero: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Contents>
        <Title>{t('home_heroTitle')}</Title>
        <ButtonGroup>
          <Button href="/releases">{t('home_releasesButton')}</Button>
          <Button href="/artists" outline>
            {t('home_artistsButton')}
          </Button>
        </ButtonGroup>
      </Contents>
    </Container>
  )
}
