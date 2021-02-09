import styled from 'styled-components'

export const Container = styled.header`
  position: fixed;
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  z-index: 10;
  transition: top 0.7s ease, background-color 0.2s ease-in-out;

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

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1368px;
  padding: 0 max(1rem, 5vw);

  > ul {
    @media (max-width: 800px) {
      visibility: hidden;
      display: none;
    }
  }
`

export const MenuItem = styled.a<{ active: boolean }>`
  text-decoration: none;

  font-weight: ${props => (props.active ? 800 : 500)};
  cursor: ${props => (props.active ? 'auto' : 'pointer')};
`
