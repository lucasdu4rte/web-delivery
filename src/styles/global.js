import { createGlobalStyle } from 'styled-components';

import './spectre.scss';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }
  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  #root {
    button::-moz-focus-inner {
      border: 0;
    }
  }
`;

export default GlobalStyle;
