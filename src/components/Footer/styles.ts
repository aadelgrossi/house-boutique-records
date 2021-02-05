import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.primary};
`

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 1em;
  font-weight: 500;
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;

  @media (min-width: 400px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 800px) {
    width: 80%;
  }
`

export const Items = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    gap: max(2vw, 1rem);
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    line-height: 0.8;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  flex-wrap: 1;
  > a + a {
    margin-left: 20px;
  }
`
export const FooterDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.primaryDark};
  width: 100%;
  padding: 0.5rem;

  > p {
    font-size: 0.7em;
  }
`
