"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import Container from "./Container";
import { ArrowRightIcon, GithubIcon, LinkedinIcon, MailIcon, RssIcon, SunIcon } from "./icons";
import { FOOTER_CAP_PATH } from "./hillPaths";

const FOOTER_HILL_VIEWBOX_WIDTH = 5120;

const LINK_COLUMNS = [
  {
    heading: "Browse by Category",
    items: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur"],
  },
  {
    heading: "Interactive Courses",
    items: ["Adipiscing Elit", "Sed Do Eiusmod", "Tempor Incididunt"],
  },
  {
    heading: "General",
    items: ["About Me", "About This Site", "Contact"],
  },
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
  grid-template-columns: minmax(240px, 1.3fr) repeat(3, 1fr);
  gap: 40px;
  padding-bottom: 48px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

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

const NewsletterLabel = styled.p`
  margin: 0;
  color: ${colors.footerText};
  font-size: 14px;
  line-height: 22px;
`;

const NewsletterForm = styled.form`
  display: flex;
  max-width: 320px;
`;

const EmailInput = styled.input`
  flex: 1;
  border: 1px solid ${colors.text};
  border-right: none;
  border-radius: 6px 0 0 6px;
  padding: 10px 12px;
  font-size: 14px;
  background: ${colors.white};
  color: ${colors.text};

  &::placeholder {
    color: ${colors.textMutedLight};
  }
`;

const SubmitButton = styled.button`
  background: ${colors.text};
  color: ${colors.white};
  border: none;
  border-radius: 0 6px 6px 0;
  padding: 0 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
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

const LegalRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  font-size: 13px;
  color: ${colors.footerText};
`;

const LegalLink = styled.a`
  color: ${colors.footerText};
  text-decoration: underline;
`;

const SocialRow = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  color: ${colors.footerText};
`;

export default function Footer() {
  return (
    <FooterWrapper>
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
              <BrandName>Lorem Ipsum</BrandName>
              <Tagline>Lorem ipsum dolor sit amet, consectetur.</Tagline>

              <div>
                <NewsletterLabel>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Enter your email:
                </NewsletterLabel>
                <NewsletterForm>
                  <EmailInput type="email" placeholder="you@example.com" />
                  <SubmitButton type="submit" aria-label="Subscribe">
                    <ArrowRightIcon />
                  </SubmitButton>
                </NewsletterForm>
              </div>
            </BrandColumn>

            {LINK_COLUMNS.map((column) => (
              <LinkColumn key={column.heading}>
                <ColumnHeading>{column.heading}</ColumnHeading>
                <ColumnLinks>
                  {column.items.map((item) => (
                    <ColumnLink key={item} href="#">
                      {item}
                    </ColumnLink>
                  ))}
                </ColumnLinks>
              </LinkColumn>
            ))}
          </TopGrid>

          <BottomBar>
            <LegalRow>
              <span>&copy; 2024&ndash;present Lorem Ipsum. All Rights Reserved.</span>
              <LegalLink href="#">Terms of Use</LegalLink>
              <LegalLink href="#">Privacy Policy</LegalLink>
              <LegalLink href="#">Code of Conduct</LegalLink>
            </LegalRow>
            <SocialRow>
              <SunIcon />
              <RssIcon />
              <GithubIcon />
              <LinkedinIcon />
              <MailIcon />
            </SocialRow>
          </BottomBar>
        </Container>
      </FooterMain>
    </FooterWrapper>
  );
}
