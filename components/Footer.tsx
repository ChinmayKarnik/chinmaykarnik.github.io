"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import Container from "./Container";
import { ArrowRightIcon, GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import { FOOTER_CAP_PATH } from "./hillPaths";

const FOOTER_HILL_VIEWBOX_WIDTH = 5120;

const EXPLORE_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Competitive Programming", href: "#cp" },
];

const FooterWrapper = styled.footer`
  position: relative;
`;

const HillCapClip = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
  overflow: hidden;
  background: ${colors.footerSky};

  @media (max-width: 640px) {
    height: 80px;
  }
`;

const HillCapSvg = styled.svg`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  display: block;
  width: ${FOOTER_HILL_VIEWBOX_WIDTH}px;
  height: 140px;

  @media (max-width: 640px) {
    height: 80px;
  }
`;

const FooterMain = styled.div`
  background: ${colors.footerSky};
  padding-bottom: 40px;
`;

const TopGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(240px, 1.3fr) 1fr;
  gap: 40px;
  padding-bottom: 48px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BrandName = styled.p`
  font-size: 24px;
  font-weight: 400;
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

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ColumnHeading = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${colors.footerText};
`;

const ColumnLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ColumnLink = styled.a`
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
  padding-top: 24px;
  border-top: 1px solid ${colors.footerHillLight};
`;

const Copyright = styled.span`
  font-size: 13px;
  color: ${colors.footerText};
`;

const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  color: ${colors.footerText};
`;

export default function Footer() {
  return (
    <FooterWrapper id="contact">
      <HillCapClip>
        <HillCapSvg
          viewBox={`0 0 ${FOOTER_HILL_VIEWBOX_WIDTH} 250`}
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d={FOOTER_CAP_PATH} fill={colors.white} />
        </HillCapSvg>
      </HillCapClip>

      <FooterMain>
        <Container>
          <TopGrid>
            <BrandColumn>
              <BrandName>Chinmay Karnik</BrandName>
              <Tagline>Let&apos;s build something — or just say hi.</Tagline>

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
            </BrandColumn>

            <LinkColumn>
              <ColumnHeading>Explore</ColumnHeading>
              <ColumnLinks>
                {EXPLORE_LINKS.map((item) => (
                  <ColumnLink key={item.label} href={item.href}>
                    {item.label}
                  </ColumnLink>
                ))}
              </ColumnLinks>
            </LinkColumn>
          </TopGrid>

          <BottomBar>
            <Copyright>&copy; 2026 Chinmay Karnik. All Rights Reserved.</Copyright>
            <SocialRow>
              <a
                href="https://github.com/ChinmayKarnik"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                style={{ color: "inherit", display: "flex" }}
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/chinmay-karnik-25a08615b"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                style={{ color: "inherit", display: "flex" }}
              >
                <LinkedinIcon />
              </a>
              <a
                href="mailto:hello@chinmaykarnik.com"
                aria-label="Email"
                style={{ color: "inherit", display: "flex" }}
              >
                <MailIcon />
              </a>
            </SocialRow>
          </BottomBar>
        </Container>
      </FooterMain>
    </FooterWrapper>
  );
}
