"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";

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
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.12);
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(10, 12, 16, 0.18);
  }
`;

type Props = {
  href: string;
  label: string;
  icon?: React.ReactNode;
};

export default function ShowMoreButton({ href, label, icon }: Props) {
  return (
    <Wrapper>
      <Button href={href} target="_blank" rel="noreferrer">
        {icon}
        {label}
      </Button>
    </Wrapper>
  );
}
