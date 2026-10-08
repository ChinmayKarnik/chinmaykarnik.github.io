"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import Eyebrow from "./Eyebrow";
import { ArrowRightIcon, ShieldIcon } from "./icons";

const SectionIntro = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.text};
  max-width: 640px;
  margin: 0 0 28px;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedCard = styled.a`
  display: flex;
  flex-direction: column;
  gap: 18px;
  background: ${colors.text};
  color: ${colors.white};
  border-radius: 16px;
  padding: 36px;
  text-decoration: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }

  @media (max-width: 640px) {
    padding: 24px;
  }
`;

const PlatformRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Badge = styled.span<{ $accent: string }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  flex-shrink: 0;
  background: ${(p) => p.$accent};
  color: ${colors.white};
`;

const PlatformName = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: ${colors.white};
  opacity: 0.75;
  text-transform: uppercase;
  letter-spacing: 0.6px;
`;

const FeaturedNumber = styled.div`
  font-size: 58px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -1.5px;
`;

const FeaturedRank = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${colors.sky};
`;

const Sparkline = styled.svg`
  display: block;
  width: 100%;
  height: 40px;
`;

const FeaturedNote = styled.p`
  font-size: 15px;
  line-height: 23px;
  color: rgba(255, 255, 255, 0.78);
  margin: 0;
`;

const ViewLink = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 700;
  margin-top: 4px;
`;

const SecondaryColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SecondaryCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: ${colors.pillBg};
  border-radius: 16px;
  padding: 24px;
  flex: 1;
`;

const SecondaryTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const SecondaryTextCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const SecondaryNumber = styled.div`
  font-size: 26px;
  font-weight: 800;
  color: ${colors.text};
  letter-spacing: -0.5px;
`;

const SecondaryHeadline = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: ${colors.text};
  letter-spacing: -0.3px;
`;

const SecondaryRank = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${colors.textMuted};
`;

const SecondaryNote = styled.p`
  font-size: 13.5px;
  line-height: 20px;
  color: ${colors.textMuted};
  margin: 0;
`;

const SecondarySparkline = styled.svg`
  display: block;
  width: 72px;
  height: 24px;
  flex-shrink: 0;
`;

const IconBadgeCircle = styled.span<{ $accent: string }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 700;
  background: rgba(10, 12, 16, 0.06);
  color: ${(p) => p.$accent};
`;

export default function CompetitiveProgrammingA() {
  return (
    <section id="competitive-programming">
      <Eyebrow>Competitive Programming</Eyebrow>
      <SectionIntro>
        Started grinding problems back at VNIT and never really stopped. Ratings are a vanity
        metric, sure, but they&apos;re also the most honest scoreboard I&apos;ve got, and I like
        having a record of progress that isn&apos;t just a gut feeling.
      </SectionIntro>
      <Layout>
        <FeaturedCard
          href="https://codeforces.com/profile/ChinmayKarnik"
          target="_blank"
          rel="noreferrer"
        >
          <PlatformRow>
            <Badge $accent={colors.rainbow[2]}>CF</Badge>
            <PlatformName>Codeforces</PlatformName>
          </PlatformRow>
          <FeaturedNumber>2326</FeaturedNumber>
          <FeaturedRank>International Master</FeaturedRank>
          <Sparkline viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden>
            <polyline
              points="0,30 14,26 28,27 42,19 56,21 70,11 84,13 100,4"
              fill="none"
              stroke={colors.sky}
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Sparkline>
          <FeaturedNote>
            This is the one I actually check obsessively. Most evenings still end with a Div. 2
            or Div. 3 round open in a tab I tell myself I&apos;ll just skim, and most of the time
            I end up solving the first three problems before remembering I had other plans. 2326
            took a long stretch of plateaus to reach, including a few genuinely humbling rounds
            where I lost more rating in twenty minutes than I&apos;d gained in the previous
            month. Grandmaster is the next marker, and I&apos;m not rushing it.
          </FeaturedNote>
          <ViewLink>
            View live rating
            <ArrowRightIcon size={15} strokeWidth={2} />
          </ViewLink>
        </FeaturedCard>

        <SecondaryColumn>
          <SecondaryCard>
            <SecondaryTop>
              <PlatformRow>
                <IconBadgeCircle $accent={colors.rainbow[1]}>CC</IconBadgeCircle>
                <SecondaryTextCol>
                  <SecondaryNumber>2175</SecondaryNumber>
                  <SecondaryRank>5★, Division 1</SecondaryRank>
                </SecondaryTextCol>
              </PlatformRow>
              <SecondarySparkline viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden>
                <polyline
                  points="0,24 20,22 40,26 60,14 80,17 100,8"
                  fill="none"
                  stroke={colors.rainbow[1]}
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </SecondarySparkline>
            </SecondaryTop>
            <SecondaryNote>
              2175 is both where I am right now and the highest I&apos;ve ever been. The long
              challenges taught me to sit with a hard problem for days instead of minutes, a
              different muscle entirely from speed-solving.
            </SecondaryNote>
          </SecondaryCard>

          <SecondaryCard>
            <PlatformRow>
              <IconBadgeCircle $accent={colors.rainbow[4]}>
                <ShieldIcon size={18} />
              </IconBadgeCircle>
              <SecondaryTextCol>
                <SecondaryHeadline>Regional Finalist</SecondaryHeadline>
                <SecondaryRank>ACM ICPC, 2021</SecondaryRank>
              </SecondaryTextCol>
            </PlatformRow>
            <SecondaryNote>
              No rating here, just one shot at a whiteboard with two teammates and a shared
              keyboard. Still the best whiteboard arguments I&apos;ve had with anyone, and the
              first time this felt like a team sport instead of a solo grind.
            </SecondaryNote>
          </SecondaryCard>
        </SecondaryColumn>
      </Layout>
    </section>
  );
}
