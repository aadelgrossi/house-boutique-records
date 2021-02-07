import styled from 'styled-components'

export const Container = styled.div<{ active: boolean }>`
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: left 1s linear;
`

export const VerticalList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  > li a {
    font-size: 20px;
  }
`

export const Title = styled.h2`
  text-transform: uppercase;
  font-family: 'Ramabhadra';
  margin-bottom: 1em;
  font-size: 2rem;
`

export const CloseMenu = styled.button`
  margin-top: 10vh;
`
