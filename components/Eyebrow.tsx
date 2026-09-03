"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";

const Eyebrow = styled.p<{ $tone?: "pink" | "footer" }>`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ $tone }) => ($tone === "footer" ? colors.footerText : colors.eyebrowPink)};
  margin: 0 0 25px;
`;

export default Eyebrow;
