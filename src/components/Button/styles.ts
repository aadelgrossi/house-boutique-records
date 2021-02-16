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
  font-family: Quicksand;
  font-weight: 700;
  min-width: 235px;
  max-width: 350px;
  background-color: ${props =>
    props.outline ? 'transparent' : props.theme.colors.secondary};
  color: ${props =>
    props.outline
      ? props.theme.colors.secondaryLight
      : props.theme.colors.white} !important;

  transition: 0.2s all ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  ${props =>
    props.outline &&
    css`
      box-shadow: inset 0px 0px 0px 2px
        ${props => props.theme.colors.secondaryLight};
    `}
`
