import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #111214;
    color: #F5F5F5;
    overflow-x: hidden;
    font: 15px Yantramanav, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialised;
  }

  input, button, p {
    font: 16px Yantramanav, sans-serif;
  }

  li {
    font-family: Quicksand;
  }

  p {
    font-weight: 300;
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1;
    text-transform: uppercase;
    overflow-wrap: break-word;
  }

  h1 {
    font-family: Anton;
  }

  h2 {
    font-weight: 900;
    letter-spacing: 0.7;
  }

  h3 {
    font-family: Quicksand;
    font-weight: 700;
  }

  li {
    list-style: none;
    text-transform: uppercase;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  input, select {
    font-family: 'Yantramanav';
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
