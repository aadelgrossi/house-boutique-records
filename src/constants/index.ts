import { FaFacebookF } from 'react-icons/fa'
import { SiBeatport, SiSoundcloud, SiInstagram } from 'react-icons/si'
export const navItems = [
  { name: 'Home', route: '/' },
  { name: 'Releases', route: '/releases' },
  { name: 'Artists', route: '/artists' },
  { name: 'News', route: '/news' },
  { name: 'Radio', route: '/radio' }
]

export const locales = [
  { locale: 'en', label: 'English' },
  { locale: 'pt', label: 'Português' }
]

export const socialIcons = [
  { Icon: SiSoundcloud, url: 'https://soundcloud.com/houseboutiquerecords' },
  {
    Icon: SiBeatport,
    url: 'https://www.beatport.com/label/house-boutique-records/93262'
  },
  { Icon: SiInstagram, url: 'https://www.instagram.com/houseboutiquerecords/' },

  {
    Icon: FaFacebookF,
    url: 'https://www.facebook.com/House-Boutique-Records-103196021795458'
  }
]
