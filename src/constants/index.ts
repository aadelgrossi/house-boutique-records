import { FaFacebookF } from 'react-icons/fa'
import { SiBeatport, SiSoundcloud, SiInstagram } from 'react-icons/si'
export const navItems = [
  { name: 'home', route: '/' },
  { name: 'releases', route: '/releases' },
  { name: 'artists', route: '/artists' },
  { name: 'news', route: '/news' },
  { name: 'radio', route: '/radio' }
]

export const locales = [
  { locale: 'en', label: 'English' },
  { locale: 'pt', label: 'Português' }
]

export const socialIcons = [
  {
    Icon: SiSoundcloud,
    url: 'https://soundcloud.com/houseboutiquerecords',
    color: '#ff7700 '
  },
  {
    Icon: SiBeatport,
    url: 'https://www.beatport.com/label/house-boutique-records/93262',
    color: '#94D500'
  },
  {
    Icon: SiInstagram,
    url: 'https://www.instagram.com/houseboutiquerecords/',
    color: '#E1306C'
  },

  {
    Icon: FaFacebookF,
    url: 'https://www.facebook.com/House-Boutique-Records-103196021795458',
    color: '#4267B2'
  }
]
