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

  html {
    background: ${colors.sky};
    scroll-padding-top: 48px;
  }

  /* Stops iOS Safari from enlarging text when a phone is turned sideways. */
  @media (max-width: 900px) {
    html {
      -webkit-text-size-adjust: 100%;
      text-size-adjust: 100%;
    }
  }

  body {
    font-family: var(--font-body), sans-serif;
    color: ${colors.text};
    background: ${colors.white};
    font-size: 16px;
    line-height: 24px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
  }
`;

export default GlobalStyle;
