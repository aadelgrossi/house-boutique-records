import React from 'react'

import { AiFillPlayCircle } from 'react-icons/ai'

import { usePlayer, useTranslation } from '~/hooks'

import { Container } from './styles'

interface PlayButtonProps {
  track: Release
}

export const PlayButton: React.FC<PlayButtonProps> = ({ track: payload }) => {
  const { dispatch } = usePlayer()
  const { t } = useTranslation()

  const { audioPreview } = payload

  return audioPreview ? (
    <Container
      onClick={() => dispatch({ name: 'load', payload })}
      aria-label="play"
    >
      <AiFillPlayCircle size={22} color="#fff" />
      <span>{t('preview')}</span>
    </Container>
  ) : null
}
