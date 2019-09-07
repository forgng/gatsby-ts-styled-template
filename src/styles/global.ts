import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
      box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    letter-spacing: 1px;
  }
`

export default GlobalStyle
