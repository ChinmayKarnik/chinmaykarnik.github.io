"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import Container from "./Container";
import { RssIcon, SearchIcon, SoundIcon, SunIcon } from "./icons";

const Bar = styled.header`
  background: ${colors.sky};
  position: relative;
  z-index: 2;
`;

const BarInner = styled(Container)`
  display: flex;
  align-items: center;
  gap: 48px;
  padding-top: 48px;
  padding-bottom: 16px;
  flex-wrap: wrap;
`;

const Logo = styled.a`
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: -1px;
  color: ${colors.brand};
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 8px;

  @media (max-width: 640px) {
    display: none;
  }
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: normal;
  text-transform: capitalize;
  color: ${colors.text};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const IconGroup = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  color: ${colors.text};
  margin-left: auto;
`;

const IconButton = styled.a`
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  border-radius: 1000px;
  padding: 0;
  color: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  text-decoration: none;
`;

const NAV_ITEMS = [
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <Bar>
      <BarInner>
        <Logo href="#">Chinmay Karnik</Logo>
        <Nav>
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.label} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </Nav>
        <IconGroup>
          <IconButton as="button" type="button" aria-label="Search">
            <SearchIcon />
          </IconButton>
          <IconButton as="button" type="button" aria-label="Disable sounds">
            <SoundIcon />
          </IconButton>
          <IconButton as="button" type="button" aria-label="Activate dark mode">
            <SunIcon />
          </IconButton>
          <IconButton href="#" aria-label="RSS Feed">
            <RssIcon />
          </IconButton>
        </IconGroup>
      </BarInner>
    </Bar>
  );
}
