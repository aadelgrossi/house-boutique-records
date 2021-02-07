import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  justify-content: center;

  @media (min-width: 620px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
`
