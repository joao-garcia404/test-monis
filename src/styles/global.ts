import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #855EFF;
    --background: #fff;
    --shape: #F5F5F5;
    --text: #231F20;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
  }

  html, body {
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  button, input {
    font-family: 'Work Sans', sans-serif;
  }
`;
