import Image from 'next/image'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'
import Markdown from 'react-markdown'

import { Badge, ReleaseCard, ReleasesGrid, SocialIcon } from '~/components'
import { useTranslation } from '~/hooks'
import { Artist } from '~/types'

import * as Styled from './styles'

interface ArtistsSlugLayoutProps {
  artist: Artist
}

export const ArtistsSlugLayout = ({ artist }: ArtistsSlugLayoutProps) => {
  const { artistPlatforms, backgroundImage, name, localizations, releases } =
    artist
  const { t } = useTranslation()

  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <Image
          src={backgroundImage.url}
          layout="responsive"
          width={1200}
          height={750}
          alt={name}
        />
      </Styled.ImageContainer>
      <Styled.Content>
        <Styled.ArtistHeader>
          <Styled.ArtistSocials>
            {artistPlatforms.map(platform => (
              <SocialIcon key={platform.id} {...platform} />
            ))}
          </Styled.ArtistSocials>
          <Styled.Name>{name}</Styled.Name>
        </Styled.ArtistHeader>
        <Styled.BioContainer>
          <Markdown
            components={{
              p: ({ children }) => (
                <Styled.BioParagraph>{children}</Styled.BioParagraph>
              )
            }}
          >
            {localizations[0]?.bio.markdown}
          </Markdown>
        </Styled.BioContainer>
        <Styled.ReleasesContainer>
          <Styled.TitleGroup>
            <Styled.Title>
              {t('artists_tracksBy')}
              {` ${name}`}
            </Styled.Title>
            <Link href={{ pathname: '/releases', query: { search: name } }}>
              <Badge style={{ cursor: 'pointer' }}>
                {t('seeAll')}
                <FaChevronRight style={{ marginLeft: 4 }} size="12px" />
              </Badge>
            </Link>
          </Styled.TitleGroup>
          <ReleasesGrid>
            {releases.map(release => (
              <ReleaseCard key={release.id} data={release} />
            ))}
          </ReleasesGrid>
        </Styled.ReleasesContainer>
      </Styled.Content>
    </Styled.Container>
  )
}
