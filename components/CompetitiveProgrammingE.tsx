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
  margin: 0 0 36px;
`;

const TableWrap = styled.div`
  border: 1px solid ${colors.hillLight};
  border-radius: 16px;
  overflow: hidden;
`;

const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 0.8fr 1.2fr;
  padding: 14px 24px;
  background: ${colors.hillLight}55;
  border-bottom: 1px solid ${colors.hillLight};

  @media (max-width: 640px) {
    display: none;
  }
`;

const HeaderCell = styled.span`
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: ${colors.textMutedLight};
`;

const EntryBlock = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid ${colors.hillLight};
  }
`;

const DataRow = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 0.8fr 1.2fr;
  align-items: center;
  gap: 8px;
  padding: 20px 24px 8px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 20px 20px 8px;
  }
`;

const PlatformCell = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Dot = styled.span<{ $accent: string }>`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${(p) => p.$accent};
  flex-shrink: 0;
`;

const PlatformName = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: ${colors.text};
`;

const RatingCell = styled.div<{ $accent: string }>`
  font-size: 26px;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: ${(p) => p.$accent};
`;

const RankCell = styled.div`
  display: flex;
`;

const RankBadge = styled.span<{ $accent: string; $tint: string }>`
  font-size: 12.5px;
  font-weight: 700;
  color: ${(p) => p.$accent};
  background: ${(p) => p.$tint};
  padding: 4px 10px;
  border-radius: 1000px;
`;

const NoteRow = styled.div`
  padding: 0 24px 20px;

  @media (max-width: 640px) {
    padding: 0 20px 20px;
  }
`;

const NoteText = styled.p`
  font-size: 14.5px;
  line-height: 22px;
  color: ${colors.textMuted};
  margin: 0 0 8px;
  max-width: 640px;
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

export default function CompetitiveProgrammingE() {
  return (
    <section id="competitive-programming">
      <Eyebrow>Competitive Programming</Eyebrow>
      <SectionIntro>
        Started grinding problems back at VNIT and never really stopped. What began as placement
        prep turned into a genuine habit, then something closer to three different habits: fast
        and reflexive, slow and stubborn, and done as a team under pressure. Ratings are a vanity
        metric, but they&apos;re the most honest scoreboard I&apos;ve got.
      </SectionIntro>
      <TableWrap>
        <HeaderRow>
          <HeaderCell>Platform</HeaderCell>
          <HeaderCell>Rating</HeaderCell>
          <HeaderCell>Rank</HeaderCell>
        </HeaderRow>
        {ROWS.map((row) => (
          <EntryBlock key={row.platform}>
            <DataRow>
              <PlatformCell>
                <Dot $accent={row.accent} />
                <PlatformName>{row.platform}</PlatformName>
              </PlatformCell>
              <RatingCell $accent={row.accent}>{row.display}</RatingCell>
              <RankCell>
                <RankBadge $accent={row.accent} $tint={row.tint}>
                  {row.rank}
                </RankBadge>
              </RankCell>
            </DataRow>
            <NoteRow>
              <NoteText>{row.note}</NoteText>
              {row.url && (
                <ProfileLink href={row.url} target="_blank" rel="noreferrer">
                  View Profile
                </ProfileLink>
              )}
            </NoteRow>
          </EntryBlock>
        ))}
      </TableWrap>
    </section>
  );
}
