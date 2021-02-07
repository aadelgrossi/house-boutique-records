import React from 'react'

import { FaFacebookF } from 'react-icons/fa'
import {
  SiBeatport,
  SiInstagram,
  SiSoundcloud,
  SiSpotify
} from 'react-icons/si'
import { useTheme } from 'styled-components'

import { Container } from './styles'

interface Props {
  id: string
  size?: number
  platform: string
  url: string
}

export const SocialIcon: React.FC<Props> = ({ platform, size = 24, url }) => {
  const { colors } = useTheme()

  const resolveIconName = (platform: string): JSX.Element => {
    switch (platform) {
      case 'beatport':
        return <SiBeatport size={size} color={colors.ice} />
      case 'spotify':
        return <SiSpotify size={size} color={colors.ice} />
      case 'soundcloud':
        return <SiSoundcloud size={size} color={colors.ice} />
      case 'facebook':
        return <FaFacebookF size={size} color={colors.ice} />
      case 'instagram':
        return <SiInstagram size={size} color={colors.ice} />
      default:
        return <></>
    }
  }

  return <Container href={url}>{resolveIconName(platform)}</Container>
}
