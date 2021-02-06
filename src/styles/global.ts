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
    min-height: 100vh;
    overflow-x: hidden;
    -webkit-font-smoothing: antialised;
  }

  body, input, button, textarea, a {
    font: 15px Quicksand, sans-serif;
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

  a:visited, a:hover, a:active {
    color: inherit;
  }

  a:focus, button:focus {
    outline: none;
  }
`
