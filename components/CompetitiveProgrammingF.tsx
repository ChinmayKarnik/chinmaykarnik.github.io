"use client";

import { useState } from "react";
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
  margin: 0 0 32px;
`;

const TabRow = styled.div`
  display: flex;
  gap: 8px;
  border-bottom: 1px solid ${colors.hillLight};
  margin-bottom: 32px;
`;

const Tab = styled.button<{ $active: boolean; $accent: string }>`
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;
  font: inherit;
  font-size: 14.5px;
  font-weight: 700;
  padding: 10px 4px 14px;
  margin-right: 24px;
  color: ${(p) => (p.$active ? p.$accent : colors.textMutedLight)};
  border-bottom: 2px solid ${(p) => (p.$active ? p.$accent : "transparent")};
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover {
    color: ${(p) => p.$accent};
  }
`;

const Panel = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 36px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const NumberCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BigNumber = styled.div<{ $accent: string }>`
  font-size: 56px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -2px;
  color: ${(p) => p.$accent};

  @media (max-width: 640px) {
    font-size: 44px;
  }
`;

const RankBadge = styled.span<{ $accent: string; $tint: string }>`
  display: inline-block;
  width: fit-content;
  font-size: 12.5px;
  font-weight: 700;
  color: ${(p) => p.$accent};
  background: ${(p) => p.$tint};
  padding: 4px 10px;
  border-radius: 1000px;
`;

const BodyCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Note = styled.p`
  font-size: 15.5px;
  line-height: 24px;
  color: ${colors.text};
  margin: 0;
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

export default function CompetitiveProgrammingF() {
  const [active, setActive] = useState(0);
  const row = ROWS[active];

  return (
    <section id="competitive-programming">
      <Eyebrow>Competitive Programming</Eyebrow>
      <SectionIntro>
        Started grinding problems back at VNIT and never really stopped. What began as placement
        prep turned into a genuine habit, then something closer to three different habits: fast
        and reflexive, slow and stubborn, and done as a team under pressure. Ratings are a vanity
        metric, but they&apos;re the most honest scoreboard I&apos;ve got.
      </SectionIntro>
      <TabRow>
        {ROWS.map((r, i) => (
          <Tab
            key={r.platform}
            type="button"
            $active={i === active}
            $accent={r.accent}
            onClick={() => setActive(i)}
          >
            {r.platform}
          </Tab>
        ))}
      </TabRow>
      <Panel key={row.platform}>
        <NumberCol>
          <BigNumber $accent={row.accent}>{row.display}</BigNumber>
          <RankBadge $accent={row.accent} $tint={row.tint}>
            {row.rank}
          </RankBadge>
        </NumberCol>
        <BodyCol>
          <Note>{row.note}</Note>
          {row.url && (
            <ProfileLink href={row.url} target="_blank" rel="noreferrer">
              View Profile
            </ProfileLink>
          )}
        </BodyCol>
      </Panel>
    </section>
  );
}
