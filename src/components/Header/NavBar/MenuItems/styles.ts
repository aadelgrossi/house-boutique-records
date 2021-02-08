import styled from 'styled-components'

export const MenuItem = styled.a<{ active: boolean }>`
  font-weight: ${props => (props.active ? 800 : 500)};
`
