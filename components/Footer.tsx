"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import Container from "./Container";
import { CalendarIcon, GithubIcon, LinkedinIcon } from "./icons";
import { FOOTER_CAP_PATH, FOOTER_ACCENT_PATH } from "./hillPaths";

const FOOTER_HILL_VIEWBOX_WIDTH = 5120;
const FOOTER_ACCENT_VIEWBOX_WIDTH = 1557;

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

// The cap path's flat top edge is sub-pixel thin, so its anti-aliased
// coverage blends with whatever sits behind it. Without this, that blend
// is against FooterMain's solid footerSky background and shows up as a
// faint 1px blue-tinted seam right at the Writing/Footer boundary.
const SeamMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: ${colors.white};
`;

// padding-top is deliberately tall: HillCapSvg (252px) and AccentSvg
// (213px) are absolutely positioned, so they don't contribute to this
// container's auto-height, and overflow: hidden will silently clip
// whichever one the flow content falls short of. The paddings here keep
// total height comfortably above both on every breakpoint.
const FooterMain = styled.div`
  position: relative;
  overflow: hidden;
  background: ${colors.footerSky};
  padding-top: 260px;
  padding-bottom: 28px;

  @media (max-width: 640px) {
    padding-top: 130px;
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
    <FooterWrapper>
      <FooterMain>
        <SeamMask />
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
          <BottomBar>
            <Copyright>&copy; 2026 Chinmay Karnik. All Rights Reserved.</Copyright>
            <SocialRow>
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
              <IconButton
                href="https://cal.com/chinmay-karnik-6ygfgj/30min"
                target="_blank"
                rel="noreferrer"
                aria-label="Book a call"
              >
                <CalendarIcon />
              </IconButton>
            </SocialRow>
          </BottomBar>
        </ContentLayer>
      </FooterMain>
    </FooterWrapper>
  );
}
