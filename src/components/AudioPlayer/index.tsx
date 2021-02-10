import { FC, useCallback, useState } from 'react'

import Image from 'next/image'
import Player, { RHAP_UI } from 'react-h5-audio-player'
import { FaChevronDown } from 'react-icons/fa'
import { ImHeadphones } from 'react-icons/im'
import { useTheme } from 'styled-components'

import { useTranslation, usePlayer } from '~/hooks'

import { ArtistRowList } from '../ArtistRowList'
import customIcons from './custom_icons'
import {
  Container,
  Wrapper,
  ReleaseInfo,
  ReleaseDetails,
  NowPlayingText,
  HideButton,
  EmptyPlayer
} from './styles'

export const AudioPlayer: FC = () => {
  const {
    state: { currentTrack, playing },
    dispatch
  } = usePlayer()

  const [playerVisible, setPlayerVisible] = useState(false)
  const { colors } = useTheme()
  const { t } = useTranslation()

  const handleHidePlayer = useCallback(() => {
    setPlayerVisible(state => !state)
  }, [])

  return (
    <Container playerVisible={playerVisible}>
      {currentTrack ? (
        <Wrapper>
          <ReleaseDetails>
            <Image
              src={currentTrack.coverArt.url}
              width={85}
              height={85}
              layout="intrinsic"
              alt={currentTrack.title}
            />
            <ReleaseInfo>
              <NowPlayingText style={{ opacity: Number(playing) }}>
                {t('nowPlaying')}
              </NowPlayingText>
              <strong>{currentTrack.title}</strong>
              <ArtistRowList data={currentTrack.artists} />
            </ReleaseInfo>
          </ReleaseDetails>

          <Player
            src={currentTrack.audioPreview.url}
            autoPlayAfterSrcChange
            autoPlay
            style={{
              height: 60,
              backgroundColor: 'transparent',
              color: '#fff'
            }}
            loop={false}
            onLoadedData={() => {
              dispatch({ name: 'play' })
              setPlayerVisible(true)
            }}
            onPlay={() => dispatch({ name: 'play' })}
            onPause={() => dispatch({ name: 'pause' })}
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
        <EmptyPlayer>{t('noTrackLoaded')}</EmptyPlayer>
      )}

      <HideButton
        draggable
        onClick={handleHidePlayer}
        active={playerVisible}
        cover={currentTrack?.coverArt.url}
        playing={playing}
      >
        {playerVisible && <FaChevronDown size={15} color={colors.white} />}

        {!playerVisible && !playing && (
          <ImHeadphones size={25} color={colors.white} style={{ zIndex: 50 }} />
        )}
      </HideButton>
    </Container>
  )
}
