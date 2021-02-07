import styled from 'styled-components'

export const Container = styled.div``

export const ImageWrapper = styled.div`
  position: relative;
`

export const ReleaseDate = styled.p`
  position: absolute;
  bottom: 12px;
  left: 6px;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  font-size: 0.6em;
  font-weight: 500;
  background-color: ${props => props.theme.colors.secondary};
  width: fit-content;
  padding: 0.1rem 0.5rem;
  border-radius: 1rem;
`

export const TrackTitle = styled.h3`
  margin-top: 0.2em;
  font-size: 1.2em;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1;
`

export const Artist = styled.a`
  font-size: 0.9em;
  text-transform: none;

  &:hover {
    text-decoration: underline;
  }

  & + & {
    margin-left: 18px;
    position: relative;

    &:before {
      position: absolute;
      display: flex;
      justify-content: center;
      content: '/';
      left: -14px;
      top: 0;
    }
  }
`
