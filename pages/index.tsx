import { NextSeo } from 'next-seo'

import { useTranslation } from '~/hooks'
import { HomeLayout } from '~/sections/home/Layout'

const Home = () => {
  const { t } = useTranslation()
  return (
    <>
      <NextSeo
        title={`House Boutique Records | ${t('officialWebsite')}`}
        description={`${t('metaDescription')}`}
        canonical="https://www.houseboutiquerecords.com/"
        openGraph={{
          type: 'website',
          title: `House Boutique Records | ${t('officialWebsite')}`,
          url: 'https://www.houseboutiquerecords.com',
          description: `${t('metaDescription')}`,
          defaultImageWidth: 1200,
          defaultImageHeight: 630,
          images: [
            {
              url: 'https://www.houseboutiquerecords.com/hb-light.jpg',
              width: 1200,
              height: 630,
              alt: 'House Boutique Records'
            }
          ]
        }}
      />
      <HomeLayout />
    </>
  )
}

export default Home
