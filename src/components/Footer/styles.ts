import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;

  background-color: ${props => props.theme.colors.primary};
`

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 1.3em;
  font-weight: 600;
  margin-bottom: 0.5em;
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 3rem max(2rem, 10vw);

  transition: 0.2s all ease-in-out;

  @media (min-width: 860px) {
    flex-direction: row;
    gap: 4vw;

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
  flex-wrap: wrap;

  > p {
    line-height: 0.8;
  }

  > a:hover {
    text-decoration: underline;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 0.5rem;
`

export const SocialButton = styled.a<{ color: string }>`
  display: flex;
  align-items: center;
  box-shadow: inset 0 0 0 1px ${props => props.theme.colors.ice};
  border-radius: 50%;
  padding: 0.8rem;
  transition: 0.2s all ease-in-out;

  &:hover {
    background-color: ${props => props.color};
    transform: scale(1.1) translateY(-5px);
    box-shadow: unset;
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
    font-size: 0.9em;
  }
`
