"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import { GithubIcon } from "./icons";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 36px;
`;

const Button = styled.a`
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
  text-decoration: none;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }
`;

export default function ShowMoreButton() {
  return (
    <Wrapper>
      <Button href="https://github.com/ChinmayKarnik" target="_blank" rel="noreferrer">
        <GithubIcon size={18} />
        More projects on GitHub
      </Button>
    </Wrapper>
  );
}
