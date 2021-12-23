import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body,
  #__next {
    height: 100vh;
  }

  ${({ theme }) => css`
    body {
      line-height: 1.5;
      font-family: ${theme.font.family};
      -webkit-font-smoothing: antialiased;
    }
  `}

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyles;
