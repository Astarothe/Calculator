import { createGlobalStyle } from 'styled-components'

import theme from './theme'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: ${theme.fontFamily},${theme.font};
  }

  html, body {
    width: 100%;
    height: 100%;
    max-width: 1920px;
    margin: 0 auto;
  }

  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    -webkit-tap-highlight-color: transparent;
  }
`
