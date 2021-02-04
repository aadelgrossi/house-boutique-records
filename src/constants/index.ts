import { FaFacebookF } from 'react-icons/fa'
import {
  SiBeatport,
  SiSoundcloud,
  SiInstagram,
  SiSpotify
} from 'react-icons/si'
export const navItems = [
  { name: 'Home', route: '/' },
  { name: 'Releases', route: '/releases' },
  { name: 'Artists', route: '/artists' },
  { name: 'News', route: '/news' },
  { name: 'Radio', route: '/radio' }
]

export const locales = [
  { locale: 'en', label: 'English' },
  { locale: 'pt-BR', label: 'Português' }
]

export const socialIcons = [
  { Icon: SiBeatport, url: 'https://beatport.com' },
  { Icon: SiSpotify, url: 'https://spotify.com' },
  { Icon: SiSoundcloud, url: 'https://soundcloud.com' },
  { Icon: SiInstagram, url: 'https://instagram.com' },
  { Icon: FaFacebookF, url: 'https://facebook.com' }
]
