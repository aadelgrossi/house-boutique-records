import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: ${props => props.theme.colors.primary};
`

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 1.3em;
  font-weight: 500;
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem;

  transition: 0.2s all ease-in-out;

  @media (min-width: 860px) {
    flex-direction: row;
    gap: 3rem;

    > div {
      flex-direction: row;
    }
  }
`

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: max(2rem, 5vw);
  transition: 0.1s all ease-in-out;
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

  > a + a {
    margin-left: 20px;
  }

  > a {
    display: flex;
    align-items: center;
    border: 1px solid ${props => props.theme.colors.ice};
    border-radius: 26px;
    padding: 12px 12px;
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
