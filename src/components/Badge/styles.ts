import styled from 'styled-components'

export const Container = styled.a`
  display: flex;
  align-items: center;
  height: 28px;
  justify-content: center;
  padding: 0.2em 0.8em;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 1.2em;
  font-size: 0.9em;
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: bold;
`
