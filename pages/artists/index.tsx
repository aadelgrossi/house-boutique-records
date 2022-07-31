import { NextSeo } from 'next-seo'

import { useTranslation } from '~/hooks'
import { ArtistsListLayout } from '~/sections/artists/list/Layout'

const Artists = () => {
  const { t } = useTranslation()

  return (
    <>
      <NextSeo
        title={`${t('header_artists')} | House Boutique Records`}
        description={`${t('artistsMetaDescription')}`}
        canonical="https://www.houseboutiquerecords.com/artists"
        openGraph={{
          type: 'website',
          title: `${t('header_artists')} | House Boutique Records`,
          url: 'https://www.houseboutiquerecords.com/artists',
          description: `${t('artistsMetaDescription')}`,
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
      <ArtistsListLayout />
    </>
  )
}

export default Artists
