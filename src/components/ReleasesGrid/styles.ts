import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  flex-wrap: wrap;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
`
