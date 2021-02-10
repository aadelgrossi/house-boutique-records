import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  width: fit-content;
  align-items: center;
  margin-top: 0.5em;
  border-radius: 1rem;
  background-color: ${props => props.theme.colors.primary};
  padding: 0.2em 0.4em;

  > span {
    margin: 0 0.4em;
    font-size: 0.9em;
    font-weight: bold;
    text-transform: uppercase;
    color: ${props => props.theme.colors.ice};
  }
`
