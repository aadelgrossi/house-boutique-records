import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const Artist = styled.a`
  font-size: 0.9em;
  text-transform: none;

  &:hover {
    text-decoration: underline;
  }

  &:not(:only-of-type, :nth-last-of-type(-n + 2)) {
    margin-right: 10px;
    position: relative;

    &:after {
      position: absolute;
      content: ',';
      right: -4px;
      top: 0;
    }
  }

  &:nth-last-of-type(2) {
    margin-right: 22px;
    position: relative;

    &:after {
      position: absolute;
      content: '&';
      right: -16px;
      top: 0;
    }
  }
`
