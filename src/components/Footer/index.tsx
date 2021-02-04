import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { socialIcons } from '~/constants'

import {
  Container,
  Content,
  FooterDetail,
  Group,
  SocialIcons,
  Title
} from './styles'

export const Footer: FC = () => {
  return (
    <Container>
      <Content>
        <Image src="/logo.jpg" width={150} height={150}></Image>

        <Group>
          <Title>Find Us On</Title>
          <SocialIcons>
            {socialIcons.map(({ Icon, url }) => (
              <Link key={url} href={url}>
                <a>
                  <Icon color="#fff" size={22} />
                </a>
              </Link>
            ))}
          </SocialIcons>
        </Group>

        <Group>
          <Title>Demos & Inquiries</Title>
          <p>contact@houseboutiquerecords.com</p>
        </Group>
      </Content>
      <FooterDetail>
        <p>2021 House Boutique Records</p>
      </FooterDetail>
    </Container>
  )
}
