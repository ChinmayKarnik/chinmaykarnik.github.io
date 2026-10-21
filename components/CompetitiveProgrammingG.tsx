"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import Eyebrow from "./Eyebrow";

type Row = {
  platform: string;
  accent: string;
  tint: string;
  display: string;
  rank: string;
  url?: string;
  note: string;
};

const ROWS: Row[] = [
  {
    platform: "Codeforces",
    accent: "#ca8a04",
    tint: "rgba(202, 138, 4, 0.1)",
    display: "2326",
    rank: "International Master",
    url: "https://codeforces.com/profile/ChinmayKarnik",
    note: "The one I actually check obsessively, usually with a Div. 2 or Div. 3 round open in a tab I tell myself I'll just skim. 2326 took a long stretch of plateaus to reach, and Grandmaster is next.",
  },
  {
    platform: "CodeChef",
    accent: "#0e7490",
    tint: "rgba(14, 116, 144, 0.1)",
    display: "2175",
    rank: "Division 1",
    url: "https://www.codechef.com/users/chinmaykarnik",
    note: "2175 is both where I am right now and the highest I've ever been. CodeChef's long format trades speed for patience, days instead of minutes with a hard idea.",
  },
  {
    platform: "ACM ICPC",
    accent: colors.rainbow[1],
    tint: "rgba(30, 41, 169, 0.1)",
    display: "2021",
    rank: "Regional Finalist",
    note: "No continuous rating here, just one shot at a whiteboard with two teammates and a shared keyboard. Regionals was the first time this felt like a team sport instead of a solo grind.",
  },
];

const SectionIntro = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.text};
  max-width: 600px;
  margin: 0 0 40px;
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 32px;

  @media (max-width: 640px) {
    padding-left: 24px;
  }
`;

const Line = styled.div`
  position: absolute;
  left: 5px;
  top: 6px;
  bottom: 6px;
  width: 2px;
  background: ${colors.hillLight};

  @media (max-width: 640px) {
    left: 3px;
  }
`;

const Node = styled.div`
  position: relative;
  padding-bottom: 40px;

  &:last-child {
    padding-bottom: 0;
  }
`;

const Dot = styled.span<{ $accent: string }>`
  position: absolute;
  left: -32px;
  top: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(p) => p.$accent};
  border: 3px solid ${colors.white};
  box-shadow: 0 0 0 2px ${(p) => p.$accent};

  @media (max-width: 640px) {
    left: -24px;
    width: 10px;
    height: 10px;
  }
`;

const NodeHead = styled.div`
  display: flex;
  align-items: baseline;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const NodeNumber = styled.span<{ $accent: string }>`
  font-size: 34px;
  font-weight: 800;
  letter-spacing: -1px;
  color: ${(p) => p.$accent};
`;

const NodePlatform = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: ${colors.text};
`;

const RankBadge = styled.span<{ $accent: string; $tint: string }>`
  font-size: 12.5px;
  font-weight: 700;
  color: ${(p) => p.$accent};
  background: ${(p) => p.$tint};
  padding: 4px 10px;
  border-radius: 1000px;
`;

const NodeNote = styled.p`
  font-size: 15px;
  line-height: 23px;
  color: ${colors.textMuted};
  margin: 0 0 10px;
  max-width: 600px;
`;

const ProfileLink = styled.a`
  display: inline-block;
  width: fit-content;
  font-size: 13px;
  font-weight: 700;
  color: ${colors.text};
  text-decoration: underline;
  text-decoration-color: ${colors.textMutedLight};
  text-underline-offset: 3px;

  &:hover {
    text-decoration-color: ${colors.text};
  }
`;

export default function CompetitiveProgrammingG() {
  return (
    <section id="competitive-programming">
      <Eyebrow>Competitive Programming</Eyebrow>
      <SectionIntro>
        Started grinding problems back at VNIT and never really stopped. What began as placement
        prep turned into a genuine habit, then something closer to three different habits: fast
        and reflexive, slow and stubborn, and done as a team under pressure. Ratings are a vanity
        metric, but they&apos;re the most honest scoreboard I&apos;ve got.
      </SectionIntro>
      <Timeline>
        <Line />
        {ROWS.map((row) => (
          <Node key={row.platform}>
            <Dot $accent={row.accent} />
            <NodeHead>
              <NodeNumber $accent={row.accent}>{row.display}</NodeNumber>
              <NodePlatform>{row.platform}</NodePlatform>
              <RankBadge $accent={row.accent} $tint={row.tint}>
                {row.rank}
              </RankBadge>
            </NodeHead>
            <NodeNote>{row.note}</NodeNote>
            {row.url && (
              <ProfileLink href={row.url} target="_blank" rel="noreferrer">
                View Profile
              </ProfileLink>
            )}
          </Node>
        ))}
      </Timeline>
    </section>
  );
}
