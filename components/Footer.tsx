"use client";

import { useEffect, useRef, type RefObject } from "react";
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

// Toggle to bring the floating avatar back — mechanism is fully preserved,
// just gated off while it's mid-review.
const ENABLE_AVATAR_ANIMATION = false;

const CATEGORY_LINKS = ["CSS", "React", "Animation", "JavaScript", "Career", "SVG", "Next.js", "General"];
const COURSE_LINKS = ["CSS for JS Developers", "The Joy of React", "Whimsical Animations"];
const GENERAL_LINKS = ["About Josh", "About This Blog", "Contact"];

const FooterWrapper = styled.footer`
  position: relative;
`;

const AvatarWrapper = styled.div`
  position: absolute;
  top: 0;
  /* TopArea's grid-template-columns is a fixed "384px auto" with a 96px
     column-gap, so the gap sits at a known, viewport-independent pixel
     range (384 to 480 from TopArea's left edge) — anchoring here, rather
     than to the viewport's horizontal center, is what keeps this clear of
     both the intro column and the nav column's text. */
  left: 432px;
  width: 80px;
  height: 104px;
  transform: translate(-50%, var(--avatar-offset, -260px));
  will-change: transform;
  pointer-events: none;
  z-index: 0;

  @media (max-width: 640px) {
    display: none;
  }
`;

const AvatarPlaceholder = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 12px 20px rgba(10, 12, 16, 0.18));
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
  padding-bottom: 28px;

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
  position: relative;
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

// Josh's floating footer avatar isn't a plain function of scroll position: sampling
// his live site shows the wrapper's `--offset` custom property still creeping toward
// a resting value across repeated reads at a *frozen* scrollY, which only happens if
// a continuous rAF loop is easing a "current" value toward a scroll-derived target
// (a spring/lerp), rather than recalculating the value in a scroll handler. This hook
// reproduces that mechanism: each frame, compute a target offset from how far the
// footer has scrolled into view, then nudge the applied offset a fraction of the way
// there, so it settles in with the same lagging, elastic feel instead of snapping.
function useAvatarFloat(
  footerRef: RefObject<HTMLDivElement | null>,
  avatarRef: RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    if (!ENABLE_AVATAR_ANIMATION) return;

    const HIDDEN_OFFSET = -260;
    const SETTLED_OFFSET = 60;
    const REVEAL_DISTANCE = 340;
    const DAMPING = 0.08;

    let current = HIDDEN_OFFSET;
    let rafId: number;

    function tick() {
      const footerEl = footerRef.current;
      const avatarEl = avatarRef.current;
      if (footerEl && avatarEl) {
        const rect = footerEl.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / REVEAL_DISTANCE));
        const target = HIDDEN_OFFSET + progress * (SETTLED_OFFSET - HIDDEN_OFFSET);
        current += (target - current) * DAMPING;
        avatarEl.style.setProperty("--avatar-offset", `${current}px`);
      }
      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [footerRef, avatarRef]);
}

export default function Footer() {
  const footerMainRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  useAvatarFloat(footerMainRef, avatarRef);

  return (
    <FooterWrapper id="contact">
      <FooterMain ref={footerMainRef}>
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
            {ENABLE_AVATAR_ANIMATION && (
              <AvatarWrapper ref={avatarRef} aria-hidden>
                <AvatarPlaceholder viewBox="0 0 200 260">
                  <rect x="30" y="110" width="140" height="150" rx="40" fill={colors.avatar.sweater} />
                  <rect x="30" y="110" width="140" height="150" rx="40" fill="url(#avatarShade)" />
                  <circle cx="100" cy="70" r="46" fill={colors.avatar.skin} />
                  <path d="M54 68a46 46 0 0 1 92 0v-6a46 46 0 0 0-92 0z" fill={colors.avatar.hair} />
                  <defs>
                    <linearGradient id="avatarShade" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0.7" stopColor={colors.avatar.sweater} stopOpacity="0" />
                      <stop offset="1" stopColor={colors.avatar.sweaterShade} stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                </AvatarPlaceholder>
              </AvatarWrapper>
            )}

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
