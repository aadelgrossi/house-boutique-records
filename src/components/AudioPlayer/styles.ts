import styled, { css } from 'styled-components'

export const Container = styled.div<{ playerVisible: boolean }>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 175px;
  bottom: 0;
  left: 0;
  padding: 0.5rem 1rem;
  transition: all 0.5s;
  z-index: 20;
  transform: translateY(100%);
  background-color: ${props => props.theme.colors.background};
  border-top: 2px solid ${props => props.theme.colors.secondary};

  ${props =>
    props.playerVisible &&
    css`
      transform: translateY(0%);
    `}
`

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    align-items: center;
    max-width: 1200px;

    flex-direction: row;
  }
`

export const ReleaseDetails = styled.div`
  display: flex;
  min-width: 300px;
  flex-direction: row;
  align-items: center;
`

export const ReleaseInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 85px;
  justify-content: flex-end;
  margin-bottom: 0.5rem;

  margin-left: 20px;
`

export const NowPlayingText = styled.h1`
  font-size: 1.2em;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.secondary};
  transition: 0.3s opacity ease-in-out;
`

interface PlayerControlProps {
  active: boolean
  playing: boolean
  cover?: string
}

export const HideButton = styled.button<PlayerControlProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -20px;
  right: 10%;
  width: 40px;
  height: 40px;
  /* border: 1px solid ${props => props.theme.colors.secondary}; */
  border-radius: 20px;
  border: unset;
  background-color: ${props => props.theme.colors.secondary};
  transition: 0.2s all ease-in-out;
  transform: translateY(0) scale(1);
  overflow: hidden;

  ${props =>
    props.playing &&
    !props.active &&
    css`
      background: ${`url(${props.cover}) no-repeat top center`};
      animation: rotate 7s infinite linear;
      background-size: contain;

      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }

      &:after {
        position: absolute;
        content: '';
        top: 0;
        height: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
      }
    `}

  ${props =>
    !props.active &&
    css`
      background-color: ${props => props.theme.colors.secondary};

      width: 80px;
      height: 80px;
      border-radius: 80px;

      top: -110px;
      right: 50px;
    `}
`
