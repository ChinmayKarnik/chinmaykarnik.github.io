"use client";

import { createGlobalStyle } from "styled-components";
import { colors } from "./theme";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: var(--font-body), sans-serif;
    color: ${colors.text};
    background: ${colors.white};
    font-size: 16px;
    line-height: 24px;
  }

  a {
    color: inherit;
  }
`;

export default GlobalStyle;
