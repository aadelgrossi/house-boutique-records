import React from 'react'

import { AiFillPlayCircle } from 'react-icons/ai'

import { usePlayer, useTranslation } from '~/hooks'
import { Release } from '~/types'

import { Container } from './styles'

interface PlayButtonProps {
  track: Release
}

export const PlayButton = ({ track }: PlayButtonProps) => {
  const { dispatch } = usePlayer()
  const { t } = useTranslation()
  const { audioPreview } = track

  if (!audioPreview) return null
  return (
    <Container
      onClick={() => dispatch({ name: 'load', payload: track })}
      aria-label="play"
    >
      <AiFillPlayCircle size={22} color="#fff" />
      <span>{t('preview')}</span>
    </Container>
  )
}
