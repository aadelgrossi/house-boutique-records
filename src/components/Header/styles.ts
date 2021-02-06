import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  width: 100%;
  height: 120px;
  background-color: transparent;
  display: flex;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
  padding: 50px;

  &:after {
    content: '';
    height: 120px;
    left: 0px;
    position: absolute;
    right: 0px;
    top: 0px;
    transition: height 300ms ease 0s;
    z-index: -1;
    pointer-events: none;
    background: rgba(0, 0, 0, 0)
      linear-gradient(
        to top,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.03) 15%,
        rgba(0, 0, 0, 0.125) 30%,
        rgba(0, 0, 0, 0.25) 46%,
        rgba(0, 0, 0, 0.4) 61%,
        rgba(0, 0, 0, 0.553) 75%,
        rgba(0, 0, 0, 0.694) 88%,
        rgba(0, 0, 0, 0.8)
      )
      repeat scroll 0% 0%;
  }
`

export const Navbar = styled.nav`
  width: min(500px, 45vw);
`

export const MenuItem = styled.a<{ active: boolean }>`
  text-decoration: none;

  font-weight: ${props => (props.active ? 800 : 500)};
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
