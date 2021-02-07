import styled from 'styled-components'

export const Container = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2em 0.8em;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 1.2em;
  font-size: 0.8em;
  text-transform: uppercase;
  font-weight: bold;
`
