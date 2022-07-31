import Link from 'next/link'

import { Button } from '~/components'
import { useTranslation } from '~/hooks'

import * as Styled from './styles'

export const HomeHero = () => {
  const { t } = useTranslation()
  return (
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
  )
}
