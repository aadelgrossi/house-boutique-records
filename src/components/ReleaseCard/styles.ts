import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 180px;
`

export const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  transition: 0.2s transform ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`

export const ReleaseDate = styled.p`
  position: absolute;
  bottom: 12px;
  left: 6px;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  font-size: 0.9em;
  font-weight: bold;
  background-color: ${props => props.theme.colors.secondary};
  width: fit-content;
  padding: 0.1rem 0.5rem;
  border-radius: 1rem;
`

export const TrackTitle = styled.a`
  cursor: pointer;
  font-family: Quicksand;
  font-weight: 700;
  margin-top: 0.4em;
  font-size: 1.2em;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
