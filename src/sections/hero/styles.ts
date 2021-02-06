import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 0 clamp(1rem, 5vw, 15vw);
  min-height: 80vh;
  width: 100%;
  background-image: url('/hero-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 0;

  @media (min-width: 720px) {
    background-position: center;
  }

  box-shadow: inset 188px 51px 185px 72px rgb(0 0 0 / 50%);

  &:before {
    width: 100%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 80%;
    z-index: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(255, 255, 255, 0) 70%
    );
  }
`

export const Contents = styled.div`
  flex-direction: column;
  justify-content: center;
  z-index: 1;
`

export const Title = styled.h1`
  font-size: clamp(38px, 6rem, 4.5vw);
  font-family: 'Anton';
  width: clamp(359px, 37rem, 56vw);
  line-height: 0.95;
  text-shadow: 25px 25px 40px ${props => props.theme.colors.black};
`

export const ButtonGroup = styled.div`
  margin: 2rem 0 4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 600px) {
    justify-content: flex-start;
  }

  gap: 1em;
`
