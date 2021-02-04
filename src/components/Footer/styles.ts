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
  font-size: 1.2em;
  font-weight: 500;
  margin-bottom: 0.2em;
`

export const Content = styled.div`
  display: flex;
  width: max(670px, 65vw);
  justify-content: space-between;
  padding: max(40px, 2rem) 0;

  flex-direction: row;
`
export const Group = styled.div``
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
