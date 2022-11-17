import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  html {
    height: 100%;
  }

  body {
    position: relative;
    min-height: 100%;
    margin: 0 auto;
    padding: 0;
    min-width: 1280px;
    font-family: "Inter", "Arial", sans-serif;
    font-weight: 400;
    color: #333333;
    background-color: #ffffff;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
      0px 0px 1px rgba(0, 0, 0, 0.04);
  }
`;
