import styled from 'styled-components'

export const Container = styled.div<{ active: boolean }>`
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
  opacity: ${props => (props.active ? 1 : 0)};
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);

  transition: all 0.4s linear;
`

export const VerticalList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 6rem;

  > li a {
    font-size: 20px;
  }
`

export const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 1em;
  font-size: 2rem;
`

export const CloseMenu = styled.button`
  margin-top: 10vh;
`
