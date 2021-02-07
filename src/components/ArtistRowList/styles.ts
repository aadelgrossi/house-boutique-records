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

  & + &:not(:last-of-type) {
    margin-left: 10px;
    position: relative;

    &:before {
      position: absolute;
      display: flex;
      justify-content: center;
      content: ',';
      left: -10px;
      top: 0;
    }
  }

  & + &:last-of-type {
    margin-left: 23px;
    position: relative;

    &:before {
      position: absolute;
      display: flex;
      justify-content: center;
      content: '&';
      left: -16px;
      top: 0;
    }
  }
`
