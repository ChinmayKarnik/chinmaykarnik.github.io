"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import Container from "./Container";
import { CalendarIcon, GithubIcon, LinkedinIcon } from "./icons";

const CAL_URL = "https://cal.com/chinmay-karnik-6ygfgj/30min";

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

  /* Below desktop the nav moves to its own row (see Nav), so the rows
     only need a small gap between them. */
  @media (max-width: 900px) {
    row-gap: 8px;
  }

  /* Smaller gap keeps the icons on the logo's row on narrow phones. */
  @media (max-width: 640px) {
    gap: 16px;
    padding-top: 28px;
  }
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

  /* Logo and icons share the top row; the links take a full row under them.
     The negative margin lines the first link's text up with the logo. */
  @media (max-width: 900px) {
    order: 3;
    flex-basis: 100%;
    margin-left: -16px;
  }

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

  @media (max-width: 359px) {
    gap: 8px;
  }
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

  /* Bigger tap area on phones; the negative margin keeps the icons where
     they were. */
  @media (max-width: 640px) {
    width: 40px;
    height: 40px;
    margin: -4px;
  }
`;

const NAV_ITEMS = [
  { label: "Projects", href: "#projects" },
  { label: "Competitive Programming", href: "#competitive-programming" },
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
          <IconButton
            href="https://github.com/ChinmayKarnik"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon />
          </IconButton>
          <IconButton href={CAL_URL} target="_blank" rel="noreferrer" aria-label="Book a call">
            <CalendarIcon />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/chinmay-karnik"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </IconButton>
        </IconGroup>
      </BarInner>
    </Bar>
  );
}
