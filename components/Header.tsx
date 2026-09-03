"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import { SearchIcon, SoundIcon, SunIcon, RssIcon } from "./icons";

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

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  color: inherit;
  cursor: pointer;
  display: flex;
`;

const NAV_ITEMS = ["Lorem", "Ipsum", "Dolor", "Sit"];

export default function Header() {
  return (
    <Bar>
      <Logo href="#">Lorem Ipsum</Logo>
      <Nav>
        {NAV_ITEMS.map((item) => (
          <NavLink key={item} href="#">
            {item}
          </NavLink>
        ))}
      </Nav>
      <IconGroup>
        <IconButton aria-label="Search">
          <SearchIcon />
        </IconButton>
        <IconButton aria-label="Toggle sound">
          <SoundIcon />
        </IconButton>
        <IconButton aria-label="Toggle theme">
          <SunIcon />
        </IconButton>
        <IconButton aria-label="RSS feed">
          <RssIcon />
        </IconButton>
      </IconGroup>
    </Bar>
  );
}
