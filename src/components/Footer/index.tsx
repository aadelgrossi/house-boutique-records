import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { socialIcons } from '~/constants'
import { useTranslation } from '~/hooks/useTranslation'

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
        <Image src="/logo.jpg" width={120} height={120} layout="fixed" />

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
            <p>contact@houseboutiquerecords.com</p>
          </Item>
        </Items>
      </MainContent>
      <FooterDetail>
        <p>2021 House Boutique Records</p>
      </FooterDetail>
    </Container>
  )
}
