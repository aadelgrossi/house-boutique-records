import styled from 'styled-components'

export const Container = styled.header`
  position: sticky;
  height: 120px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
`

export const Navbar = styled.nav`
  width: min(500px, 45vw);
`

export const MenuItem = styled.a<{ active: boolean }>`
  text-decoration: none;

  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  cursor: ${props => (props.active ? 'auto' : 'pointer')};
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;

  > li + li {
    margin-left: 8px;
  }
`

export const LocaleSwitcher = styled.ul`
  min-width: 110px;
`
