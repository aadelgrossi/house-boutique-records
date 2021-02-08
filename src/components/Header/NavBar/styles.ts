import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
`

export const Menu = styled.ul`
  display: none;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  gap: 1rem;

  @media (min-width: 800px) {
    display: flex;
  }

  > li {
    transition: 0.2s all ease-in-out;

    &:hover {
      transform: translateY(-5px);
    }
  }

  > li a {
    font-size: 17px;
  }

  > li + li {
    margin-left: 8px;
  }
`

export const MobileMenu = styled.a`
  @media (min-width: 800px) {
    display: none;
  }
`
