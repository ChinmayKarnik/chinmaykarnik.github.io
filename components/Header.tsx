"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import { GithubIcon } from "./icons";

const Bar = styled.header`
  background: ${colors.sky};
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;

  @media (max-width: 640px) {
    padding: 16px 16px;
  }
`;

const Logo = styled.a`
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -1px;
  color: ${colors.brand};
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 32px;

  @media (max-width: 640px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -1px;
  color: ${colors.text};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const IconGroup = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  color: ${colors.text};
`;

const IconButton = styled.a`
  background: none;
  border: none;
  padding: 0;
  color: inherit;
  cursor: pointer;
  display: flex;
`;

const NAV_ITEMS = [
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <Bar>
      <Logo href="#">Chinmay Karnik</Logo>
      <Nav>
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.label} href={item.href}>
            {item.label}
          </NavLink>
        ))}
      </Nav>
      <IconGroup>
        <IconButton
          href="https://github.com/ChinmayKarnik"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon />
        </IconButton>
      </IconGroup>
    </Bar>
  );
}
