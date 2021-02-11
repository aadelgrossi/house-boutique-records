import styled, { css } from 'styled-components'

interface ButtonProps {
  outline?: boolean
}

export const Container = styled.a<ButtonProps>`
  padding: 0.8rem 1.6rem;
  height: 56px;
  cursor: pointer;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  max-width: 350px;
  background-color: ${props =>
    props.outline ? 'transparent' : props.theme.colors.secondary};

  transition: 0.2s all ease-in-out;

  &:hover {
    background-color: ${props => props.theme.colors.white};
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
        color: ${props => props.theme.colors.white};
        box-shadow: inset 0px 0px 0px 2px ${props => props.theme.colors.white};
      }
    `}

  font-weight: bold;
`
