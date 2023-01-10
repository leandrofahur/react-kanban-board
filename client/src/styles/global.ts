import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background-color: ${(props => props.theme.colors.background)};
    color: ${(props => props.theme.colors.primary)};
    -webkit-font-smoothing: antialiased;
    /* max-width: 100vw;
    max-height: 100vh;
    width: 100%;
    height: 100%;
    margin: 0 auto; */
  }

  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`