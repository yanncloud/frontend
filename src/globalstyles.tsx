import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Karmilla';
    font-style: normal;
    font-weight: 400;
    src: url('/karmilla-regular.woff2') format('woff2'),
      url('/karmilla-regular.woff') format('woff');
  }
  @font-face {
    font-family: 'Karmilla';
    font-style: normal;
    font-weight: 700;
    src: url('/karmilla-bold.woff2') format('woff2'),
      url('/karmilla-bold.woff') format('woff');
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    font: 16px/1 'Karmilla';
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`
