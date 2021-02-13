import { FaFacebookF } from 'react-icons/fa'
import { SiBeatport, SiSoundcloud, SiInstagram } from 'react-icons/si'
export const navItems = [
  { name: 'home', route: '/' },
  { name: 'releases', route: '/releases' },
  { name: 'artists', route: '/artists' }
  // { name: 'news', route: '/news' },
  // { name: 'radio', route: '/radio' }
]

export const locales = [
  { locale: 'en', label: 'ENGLISH' },
  { locale: 'pt', label: 'PORTUGUÊS' }
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

export const responsiveCardsConfig = {
  xl: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4,
    slidesToSlide: 2 // optional, default to 1.
  },
  lg: {
    breakpoint: { max: 1200, min: 800 },
    items: 3,
    slidesToSlide: 2 // optional, default to 1.
  },
  md: {
    breakpoint: { max: 800, min: 500 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  sm: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
}
