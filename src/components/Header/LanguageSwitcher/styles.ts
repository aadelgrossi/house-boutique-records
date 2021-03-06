import styled from 'styled-components'

export const MenuItem = styled.a<{ active: boolean }>`
  text-decoration: none;

  font-weight: ${props => (props.active ? 800 : 500)};
  cursor: ${props => (props.active ? 'auto' : 'pointer')};
`

export const Container = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;

  > li + li {
    margin-left: 32px;
    position: relative;

    &:before {
      position: absolute;
      display: flex;
      justify-content: center;
      content: '/';
      left: -19px;
      top: 0;
    }
  }
`
