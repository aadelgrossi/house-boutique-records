import styled from 'styled-components'

export const Container = styled.a`
  display: flex;
  width: fit-content;
  align-items: center;
  height: 28px;
  cursor: auto;
  justify-content: space-between;
  padding: 0.2em 0.8em;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 1.2em;
  font-size: 0.9em;
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: bold;
`
