"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import { ArrowDownIcon } from "./icons";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 48px 0 80px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${colors.showMoreBg};
  color: ${colors.white};
  border: none;
  border-radius: 8px;
  padding: 14px 28px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }
`;

export default function ShowMoreButton() {
  return (
    <Wrapper>
      <Button type="button">
        <ArrowDownIcon />
        Show more
      </Button>
    </Wrapper>
  );
}
