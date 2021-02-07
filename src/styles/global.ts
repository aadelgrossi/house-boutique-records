import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${({ theme: { colors } }) => colors.background};
    color: ${({ theme: { colors } }) => colors.text};
    overflow-x: hidden;
  }

  body, input, button, textarea, a {
    font: 15px Quicksand, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1;
  }

  h1 {
    font-family: Ramabhadra;
  }

  h2 {
    font-family: Quicksand;
    font-weight: 600;
  }

  li {
    list-style: none;
    text-transform: uppercase;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  input, select {
    font-family: Quicksand;
    font-size: 1em;
    border: none;
    background-color: transparent;
    height: 56px;
  }

  button {
    border: none;
    cursor: pointer;
    background-color: transparent;
  }

  a:visited, a:hover, a:active {
    color: inherit;
  }

  a:focus, button:focus {
    outline: none;
  }
`
