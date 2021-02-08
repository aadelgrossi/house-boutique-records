import { FC, useCallback, useMemo, useState } from 'react'

import Image from 'next/image'
import Player, { RHAP_UI } from 'react-h5-audio-player'
import { FaChevronDown } from 'react-icons/fa'
import { ImHeadphones } from 'react-icons/im'
import { useTheme } from 'styled-components'

import { usePlayer } from '~/hooks/usePlayer'
import { useTranslation } from '~/hooks/useTranslation'

import { ArtistRowList } from '../ArtistRowList'
import customIcons from './custom_icons'
import {
  Container,
  Wrapper,
  ReleaseInfo,
  ReleaseDetails,
  NowPlayingText,
  HideButton
} from './styles'

type PlayerState = 'idle' | 'playing'

export const AudioPlayer: FC = () => {
  const { track } = usePlayer()
  const [playerState, setPlayerState] = useState<PlayerState>('idle')

  const [playerVisible, setPlayerVisible] = useState(false)
  const { colors } = useTheme()
  const { t } = useTranslation()

  const handleHidePlayer = useCallback(() => {
    setPlayerVisible(state => !state)
  }, [])

  const isPlaying = useMemo(() => {
    return playerState === 'playing'
  }, [playerState])

  return (
    <Container playerVisible={playerVisible}>
      {track ? (
        <Wrapper>
          <ReleaseDetails>
            <Image
              src={track.coverArt.url}
              width={85}
              height={85}
              layout="intrinsic"
            />
            <ReleaseInfo>
              <NowPlayingText style={{ opacity: Number(isPlaying) }}>
                {t('nowPlaying')}
              </NowPlayingText>
              <strong>{track.title}</strong>
              <ArtistRowList data={track.artists} />
            </ReleaseInfo>
          </ReleaseDetails>

          <Player
            src={track.audioPreview.url}
            autoPlayAfterSrcChange
            autoPlay
            style={{
              height: 60,
              backgroundColor: 'transparent',
              color: '#fff'
            }}
            loop={false}
            onLoadedData={() => {
              setPlayerState('playing')
              setPlayerVisible(true)
            }}
            onPlay={() => setPlayerState('playing')}
            onPause={() => setPlayerState('idle')}
            customProgressBarSection={[
              RHAP_UI.MAIN_CONTROLS,
              RHAP_UI.CURRENT_TIME,
              RHAP_UI.PROGRESS_BAR,
              RHAP_UI.DURATION,
              RHAP_UI.VOLUME
            ]}
            customControlsSection={[]}
            customVolumeControls={[]}
            customIcons={customIcons}
          />
        </Wrapper>
      ) : (
        <p>Nada tocando no momento...</p>
      )}

      <HideButton
        onClick={handleHidePlayer}
        active={playerVisible}
        cover={track?.coverArt.url}
        playing={isPlaying}
      >
        {playerVisible ? (
          <FaChevronDown size={15} color={colors.white} />
        ) : (
          <ImHeadphones size={25} color={colors.white} style={{ zIndex: 50 }} />
        )}
      </HideButton>
    </Container>
  )
}
