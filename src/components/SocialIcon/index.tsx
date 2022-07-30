import { cloneElement } from 'react'

import { FaFacebookF } from 'react-icons/fa'
import {
  SiBeatport,
  SiInstagram,
  SiSoundcloud,
  SiSpotify
} from 'react-icons/si'
import { useTheme } from 'styled-components'

import { Container } from './styles'

interface SocialIconProps {
  id: string
  size?: number
  platform: string
  url: string
}

const iconsMap: {
  [platform: string]: JSX.Element
} = {
  beatport: <SiBeatport />,
  spotify: <SiSpotify />,
  soundcloud: <SiSoundcloud />,
  facebook: <FaFacebookF />,
  instagram: <SiInstagram />
}

export const SocialIcon = ({ platform, size = 24, url }: SocialIconProps) => {
  const { colors } = useTheme()
  const icon = cloneElement(iconsMap[platform], { size, color: colors.ice })

  return <Container href={url}>{icon}</Container>
}
