import Link from 'next/link'

import { LogoFullMono } from '~/assets'
import { socialIcons } from '~/constants'
import { useTranslation } from '~/hooks'

import * as Styled from './styles'

export const Footer = () => {
  const { t } = useTranslation()
  return (
    <Styled.Container>
      <Styled.MainContent>
        <LogoFullMono />

        <Styled.Items>
          <Styled.Item>
            <Styled.Title>{t('footer_socials')}</Styled.Title>
            <Styled.SocialIcons>
              {socialIcons.map(({ Icon, url, color }) => (
                <Styled.SocialButton key={url} color={color} href={url}>
                  <Icon color="#fff" size={22} />
                </Styled.SocialButton>
              ))}
            </Styled.SocialIcons>
          </Styled.Item>

          <Styled.Item>
            <Styled.Title>{t('footer_contact')}</Styled.Title>
            <Link href="mailto:contato@houseboutiquerecords.com">
              <a>contato@houseboutiquerecords.com</a>
            </Link>
          </Styled.Item>
        </Styled.Items>
      </Styled.MainContent>
      <Styled.FooterDetail>
        <p>2021 House Boutique Records</p>
      </Styled.FooterDetail>
    </Styled.Container>
  )
}
