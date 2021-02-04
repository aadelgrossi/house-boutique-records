import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 10vw;
  min-height: 90vh;
  width: 100%;
  background-image: url('/hero-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:before {
    width: 100%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`

export const Contents = styled.div`
  flex-direction: column;
  z-index: 1;
`

export const Title = styled.h1`
  font-size: 4em;
  font-family: 'Anton';
  width: 400px;
  line-height: 0.95;
`

export const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;

  > div + div {
    margin-left: 0.5rem;
  }
`
