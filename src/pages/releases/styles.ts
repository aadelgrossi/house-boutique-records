import styled from 'styled-components'

export const Title = styled.h1`
  text-transform: uppercase;
`

export const Filters = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 1200px;
  align-items: flex-end;

  p {
    text-align: right;
  }

  > div {
    width: 100%;
  }

  @media (min-width: 700px) {
    > div:first-of-type {
      width: 35%;
    }

    > div:nth-of-type(2) {
      width: 25%;
    }
  }
`

const FilterItem = styled.div`
  width: 100%;
  height: 56px;
`

export const SearchBox = styled(FilterItem)`
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  border-bottom: 1px solid gray;
`

export const ResultsCount = styled.p`
  margin-left: auto;
`

export const Input = styled.input`
  width: 90%;
  background-color: transparent;
  height: 56px;
  color: white;
  padding-right: 0.6rem;
  padding-left: 1rem;
  font-size: 16px;
`

export const Release = styled.div`
  cursor: pointer;
  position: relative;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.8);
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 0 0.5rem;
  transition: 0.2s ease;

  &:hover {
    opacity: 1;
  }
`

export const ReleaseTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.4em;
`

export const ReleaseArtist = styled.p`
  font-size: 1em;
  text-align: center;
`

export const ReleaseGrid = styled.div`
  display: grid;
  margin: 3rem 0;
  gap: max(2vw, 1rem);
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
`

export const InfoButton = styled.div`
  padding: 0.5rem;
  margin-top: 0.5rem;
  background-color: ${props => props.theme.colors.secondary};

  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.9em;
`
