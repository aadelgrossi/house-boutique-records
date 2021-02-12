import { FC } from 'react'

import Link from 'next/link'

import { socialIcons } from '~/constants'
import { useTranslation } from '~/hooks'

import { FullMono as Logo } from '../Logo'
import {
  Container,
  MainContent,
  FooterDetail,
  Item,
  SocialIcons,
  SocialButton,
  Items,
  Title
} from './styles'

export const Footer: FC = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <MainContent>
        <Logo />

        <Items>
          <Item>
            <Title>{t('footer_socials')}</Title>
            <SocialIcons>
              {socialIcons.map(({ Icon, url, color }) => (
                <Link key={url} href={url}>
                  <SocialButton color={color}>
                    <Icon color="#fff" size={22} />
                  </SocialButton>
                </Link>
              ))}
            </SocialIcons>
          </Item>

          <Item>
            <Title>{t('footer_contact')}</Title>
            <Link href="mailto:info@houseboutiquerecords.com">
              <a>info@houseboutiquerecords.com</a>
            </Link>
          </Item>
        </Items>
      </MainContent>
      <FooterDetail>
        <p>2021 House Boutique Records</p>
      </FooterDetail>
    </Container>
  )
}
