import Image from 'next/image'
import { useRouter } from 'next/router'
import Markdown from 'react-markdown'

import { ArtistRowList, Badge, Button, PlayButton } from '~/components'
import { useTranslation } from '~/hooks'
import { Release } from '~/types'
import { formatLongDate } from '~/utils'

import * as Styled from './styles'

interface ReleaseInfoProps {
  release: Release
}

export const ReleaseInfo = ({ release }: ReleaseInfoProps) => {
  const { coverArt, genres, title, artists, localizations, releaseDate, link } =
    release
  const { locale } = useRouter()
  const { t } = useTranslation()

  return (
    <Styled.ReleaseInfoContainer>
      <Styled.ImageContainer>
        <Image src={coverArt.url} width={300} height={300} alt={title} />
      </Styled.ImageContainer>
      <Styled.Details>
        <Styled.Genres>
          {genres.map(({ id, name }) => (
            <Badge key={id}>{name.replace('_', ' ')}</Badge>
          ))}
        </Styled.Genres>

        <Styled.ReleaseTitle>{title}</Styled.ReleaseTitle>

        <ArtistRowList data={artists} fontSize="1rem" />

        <Styled.DescriptionWrapper>
          <Markdown
            components={{
              p: ({ children }) => (
                <Styled.DescriptionParagraph>
                  {children}
                </Styled.DescriptionParagraph>
              )
            }}
          >
            {localizations[0]?.description?.markdown}
          </Markdown>
        </Styled.DescriptionWrapper>

        <PlayButton track={release} />

        <Styled.ReleaseDate>
          <strong>{t('releaseDate')}</strong>
          <p>{formatLongDate(releaseDate, locale)}</p>
        </Styled.ReleaseDate>

        {link && <Button href={link}>{t('streamNow')}</Button>}
      </Styled.Details>
    </Styled.ReleaseInfoContainer>
  )
}
