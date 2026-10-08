"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import Eyebrow from "./Eyebrow";
import { ArrowRightIcon } from "./icons";

const CF = colors.rainbow[1];
const CC = colors.rainbow[2];
const IC = colors.rainbow[4];

const SectionIntro = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.text};
  max-width: 640px;
  margin: 0 0 32px;
`;

const BannerRow = styled.div`
  display: flex;
  gap: 56px;
  flex-wrap: wrap;
  margin-bottom: 32px;
`;

const BannerItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const BannerNumber = styled.div<{ $accent: string }>`
  font-size: 72px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -2px;
  color: ${(p) => p.$accent};

  @media (max-width: 640px) {
    font-size: 52px;
  }
`;

const BannerPlatform = styled.div`
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: ${colors.text};
  margin-top: 6px;
`;

const BannerRank = styled.div`
  font-size: 13px;
  color: ${colors.textMuted};
`;

const Divider = styled.div`
  border-top: 1px solid ${colors.hillLight};
  margin-bottom: 32px;
`;

const Essay = styled.p`
  font-size: 17px;
  line-height: 28px;
  color: ${colors.text};
  max-width: 760px;
  margin: 0;
`;

const Em = styled.span<{ $accent: string }>`
  font-weight: 700;
  color: ${(p) => p.$accent};
`;

const LinksRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 28px;
`;

const PlatformLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.text};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function CompetitiveProgrammingC() {
  return (
    <section id="competitive-programming">
      <Eyebrow>Competitive Programming</Eyebrow>
      <SectionIntro>
        Started grinding problems back at VNIT and never really stopped. Ratings are a vanity
        metric, sure, but they&apos;re also the most honest scoreboard I&apos;ve got.
      </SectionIntro>

      <BannerRow>
        <BannerItem>
          <BannerNumber $accent={CF}>2326</BannerNumber>
          <BannerPlatform>Codeforces</BannerPlatform>
          <BannerRank>International Master</BannerRank>
        </BannerItem>
        <BannerItem>
          <BannerNumber $accent={CC}>2175</BannerNumber>
          <BannerPlatform>CodeChef</BannerPlatform>
          <BannerRank>5★, Division 1</BannerRank>
        </BannerItem>
        <BannerItem>
          <BannerNumber $accent={IC}>2021</BannerNumber>
          <BannerPlatform>ACM ICPC</BannerPlatform>
          <BannerRank>Regional Finalist</BannerRank>
        </BannerItem>
      </BannerRow>

      <Divider />

      <Essay>
        <Em $accent={CF}>Codeforces</Em> is the one I actually check obsessively. Most evenings
        still end with a Div. 2 or Div. 3 round open in a tab I tell myself I&apos;ll just skim,
        and right now that habit has me sitting at <Em $accent={CF}>2326, International Master</Em>,
        chasing Grandmaster one rated contest at a time. <Em $accent={CC}>CodeChef</Em>&apos;s long
        challenges taught me a completely different skill, days instead of minutes with a hard
        idea, and <Em $accent={CC}>2175, 5★ Division 1</Em> is both where I am right now and the
        highest I&apos;ve ever been. Then there&apos;s <Em $accent={IC}>ACM ICPC</Em>, no rating
        at all, just one shot at a whiteboard with two teammates and a single shared keyboard, and{" "}
        <Em $accent={IC}>Regional Finalist in 2021</Em> is still the best set of whiteboard
        arguments I&apos;ve ever had with anyone.
      </Essay>

      <LinksRow>
        <PlatformLink href="https://codeforces.com/profile/ChinmayKarnik" target="_blank" rel="noreferrer">
          Codeforces profile
          <ArrowRightIcon size={14} strokeWidth={2} />
        </PlatformLink>
        <PlatformLink href="https://www.codechef.com/users/chinmaykarnik" target="_blank" rel="noreferrer">
          CodeChef profile
          <ArrowRightIcon size={14} strokeWidth={2} />
        </PlatformLink>
      </LinksRow>
    </section>
  );
}
