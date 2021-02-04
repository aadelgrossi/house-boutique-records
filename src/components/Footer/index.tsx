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
  console.log({ socialIcons })
  return (
    <Container>
      <Content>
        <Image src="/logo.jpg" width={150} height={150}></Image>

        <Group>
          <Title>Find Us On</Title>
          <SocialIcons>
            {socialIcons.map(({ Icon, url }) => (
              <a key={url} href={url} style={{ cursor: 'pointer' }}>
                <Icon color="#fff" size={22} />
                {/* {url} */}
              </a>
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
