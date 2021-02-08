import React from 'react'

import { AiFillPlayCircle } from 'react-icons/ai'

import { usePlayer } from '~/hooks/usePlayer'
import { useTranslation } from '~/hooks/useTranslation'

import { Container } from './styles'

interface PlayButtonProps {
  track: Release
}

export const PlayButton: React.FC<PlayButtonProps> = ({ track: payload }) => {
  const { dispatch } = usePlayer()
  const { t } = useTranslation()

  return (
    <Container onClick={() => dispatch({ name: 'load', payload })}>
      <AiFillPlayCircle size={22} color="#fff" />
      <span>{t('preview')}</span>
    </Container>
  )
}
