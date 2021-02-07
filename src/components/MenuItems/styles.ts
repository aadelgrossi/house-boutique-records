import styled from 'styled-components'

export const MenuItem = styled.a<{ active: boolean }>`
  text-decoration: none;

  font-weight: ${props => (props.active ? 800 : 500)};
  cursor: ${props => (props.active ? 'auto' : 'pointer')};
`
