import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme: { colors } }) => colors.background};
    color: ${({ theme: { colors } }) => colors.text};
  }

  body, input, button, textarea {
    font: 400 16px Quicksand, sans-serif;
  }

  h1 {
    font-family: 'Ramabhadra';
  }

  h2 {
    font-family: 'Quicksand';
    font-weight: bold;
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
