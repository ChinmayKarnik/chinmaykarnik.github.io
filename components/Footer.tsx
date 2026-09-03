"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import Container from "./Container";
import {
  ArrowRightIcon,
  BlueskyIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  RssIcon,
  SearchIcon,
  SoundIcon,
  SunIcon,
} from "./icons";
import { FOOTER_CAP_PATH, FOOTER_ACCENT_PATH } from "./hillPaths";

const FOOTER_HILL_VIEWBOX_WIDTH = 5120;
const FOOTER_ACCENT_VIEWBOX_WIDTH = 1557;

const CATEGORY_LINKS = ["CSS", "React", "Animation", "JavaScript", "Career", "SVG", "Next.js", "General"];
const COURSE_LINKS = ["CSS for JS Developers", "The Joy of React", "Whimsical Animations"];
const GENERAL_LINKS = ["About Josh", "About This Blog", "Contact"];

const FooterWrapper = styled.footer`
  position: relative;
`;

const HillCapSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  width: ${FOOTER_HILL_VIEWBOX_WIDTH}px;
  height: 252px;

  @media (max-width: 640px) {
    height: 132px;
  }
`;

const FooterMain = styled.div`
  position: relative;
  overflow: hidden;
  background: ${colors.footerSky};
  padding-top: 100px;
  padding-bottom: 40px;

  @media (max-width: 640px) {
    padding-top: 74px;
  }
`;

const AccentSvg = styled.svg`
  position: absolute;
  left: -784px;
  bottom: 0;
  display: block;
  width: ${FOOTER_ACCENT_VIEWBOX_WIDTH}px;
  height: 213px;
  z-index: 0;

  @media (max-width: 900px) {
    display: none;
  }
`;

const ContentLayer = styled(Container)`
  position: relative;
  z-index: 1;
`;

const TopArea = styled.div`
  display: grid;
  grid-template-columns: 384px auto;
  /* Third row is empty in the left column — it exists only so the nav
     column (which spans all rows) is tall enough to bottom-align below
     the wave's deepest trough, the way Josh's own tall "email" row does
     for his layout. */
  grid-template-rows: auto auto 93px;
  grid-template-areas:
    "intro links"
    "contact links"
    ".      links";
  column-gap: 96px;
  row-gap: 32px;
  align-items: end;
  padding-bottom: 48px;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }
`;

const IntroBlock = styled.div`
  grid-area: intro;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 384px;
  transform: translateY(-8px);
`;

const BrandName = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: -1px;
  color: ${colors.brand};
  margin: 0;
`;

const Tagline = styled.p`
  margin: 0;
  color: ${colors.text};
`;

const ContactList = styled.div`
  grid-area: contact;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${colors.text};
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const NavGrid = styled.nav`
  grid-area: links;
  display: grid;
  grid-template-columns: 160px 160px 104px;
  column-gap: 64px;
  row-gap: 16px;
  flex-shrink: 0;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    row-gap: 24px;
  }
`;

const NavHeading = styled.h2`
  margin: 0 0 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: normal;
  text-transform: uppercase;
  color: ${colors.footerText};
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CategoryList = styled(NavList)`
  display: grid;
  grid-template-columns: repeat(2, 76px);
  gap: 8px;
`;

const NavLink = styled.a`
  color: ${colors.text};
  text-decoration: none;
  font-size: 14px;
  line-height: 21px;

  &:hover {
    text-decoration: underline;
  }
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

const Copyright = styled.span`
  font-size: 13px;
  color: ${colors.footerText};
`;

const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${colors.footerText};
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

export default function Footer() {
  return (
    <FooterWrapper id="contact">
      <FooterMain>
        <HillCapSvg
          viewBox={`0 0 ${FOOTER_HILL_VIEWBOX_WIDTH} 337`}
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d={FOOTER_CAP_PATH} fill={colors.white} />
        </HillCapSvg>

        <AccentSvg viewBox={`0 0 ${FOOTER_ACCENT_VIEWBOX_WIDTH} 213`} aria-hidden>
          <path d={FOOTER_ACCENT_PATH} fill={colors.footerHillLight} />
        </AccentSvg>

        <ContentLayer>
          <TopArea>
            <IntroBlock>
              <BrandName>Chinmay Karnik</BrandName>
              <Tagline>Let&apos;s build something — or just say hi.</Tagline>
            </IntroBlock>

            <ContactList>
              <ContactLink href="mailto:hello@chinmaykarnik.com">
                <MailIcon size={16} />
                hello@chinmaykarnik.com
              </ContactLink>
              <ContactLink
                href="https://www.linkedin.com/in/chinmay-karnik-25a08615b"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </ContactLink>
              <ContactLink
                href="https://cal.com/chinmay-karnik-6ygfgj/30min"
                target="_blank"
                rel="noreferrer"
              >
                <ArrowRightIcon size={16} />
                Book a call
              </ContactLink>
            </ContactList>

            <NavGrid>
              <div>
                <NavHeading>Browse By Category</NavHeading>
                <CategoryList>
                  {CATEGORY_LINKS.map((label) => (
                    <li key={label}>
                      <NavLink href="#">{label}</NavLink>
                    </li>
                  ))}
                </CategoryList>
              </div>

              <div>
                <NavHeading>Interactive Courses</NavHeading>
                <NavList>
                  {COURSE_LINKS.map((label) => (
                    <li key={label}>
                      <NavLink href="#">{label}</NavLink>
                    </li>
                  ))}
                </NavList>
              </div>

              <div>
                <NavHeading>General</NavHeading>
                <NavList>
                  {GENERAL_LINKS.map((label) => (
                    <li key={label}>
                      <NavLink href="#">{label}</NavLink>
                    </li>
                  ))}
                </NavList>
              </div>
            </NavGrid>
          </TopArea>

          <BottomBar>
            <Copyright>&copy; 2026 Chinmay Karnik. All Rights Reserved.</Copyright>
            <SocialRow>
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
              <IconButton href="#" target="_blank" rel="noreferrer" aria-label="Bluesky">
                <BlueskyIcon />
              </IconButton>
              <IconButton
                href="https://github.com/ChinmayKarnik"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/chinmay-karnik-25a08615b"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </IconButton>
            </SocialRow>
          </BottomBar>
        </ContentLayer>
      </FooterMain>
    </FooterWrapper>
  );
}
