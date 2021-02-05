import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { socialIcons } from '~/constants'

import {
  Container,
  MainContent,
  FooterDetail,
  Item,
  SocialIcons,
  Items,
  Title
} from './styles'

export const Footer: FC = () => {
  return (
    <Container>
      <MainContent>
        <Image src="/logo.jpg" width={120} height={120} layout="fixed" />

        <Items>
          <Item>
            <Title>Find Us On</Title>
            <SocialIcons>
              {/* {socialIcons.map(i => (
                <Link key={url} href={url}>
                  <a>
                    <Icon color="#fff" size={22} />
                  </a>
                </Link>
              ))} */}
            </SocialIcons>
          </Item>

          <Item>
            <Title>Get in touch</Title>
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
