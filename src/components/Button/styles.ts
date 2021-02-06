import styled, { css } from 'styled-components'

type Props = { outline: boolean }

export const Container = styled.div<Props>`
  padding: 0.8rem 1.6rem;
  height: 56px;
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: ${props =>
    props.outline ? 'transparent' : props.theme.colors.secondary};

  transition: 0.2s all ease-in-out;

  &:hover {
    background-color: ${props => props.theme.colors.ice};
    transform: translateY(-5px);
    color: ${props => props.theme.colors.secondary};
  }

  ${props =>
    props.outline &&
    css`
      color: ${props => props.theme.colors.secondary};
      box-shadow: inset 0px 0px 0px 2px ${props => props.theme.colors.secondary};

      &:hover {
        background-color: unset;
        color: ${props => props.theme.colors.ice};
        box-shadow: inset 0px 0px 0px 2px ${props => props.theme.colors.ice};
      }
    `}

  > a {
    font-weight: bold;
  }
`
