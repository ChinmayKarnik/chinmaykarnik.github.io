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

const Table = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowItem = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 32px;
  padding: 32px 0;
  border-top: 1px solid ${colors.hillLight};

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 24px 0;
  }
`;

const RowNumberCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const RowDisplay = styled.div<{ $accent: string }>`
  font-size: 48px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -1.5px;
  color: ${(p) => p.$accent};

  @media (max-width: 640px) {
    font-size: 36px;
  }
`;

const RowPlatform = styled.div`
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  color: ${colors.text};
`;

const RowBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
`;

const RankBadge = styled.span<{ $accent: string; $tint: string }>`
  font-size: 12.5px;
  font-weight: 700;
  color: ${(p) => p.$accent};
  background: ${(p) => p.$tint};
  padding: 4px 10px;
  border-radius: 1000px;
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

const RowNote = styled.p`
  font-size: 15.5px;
  line-height: 24px;
  color: ${colors.text};
  margin: 0;
  max-width: 640px;
`;

export default function CompetitiveProgrammingD() {
  return (
    <section id="competitive-programming">
      <Eyebrow>Competitive Programming</Eyebrow>
      <SectionIntro>
        Started grinding problems back at VNIT and never really stopped. What began as placement
        prep turned into a genuine habit, then something closer to three different habits: fast
        and reflexive, slow and stubborn, and done as a team under pressure. Ratings are a vanity
        metric, but they&apos;re the most honest scoreboard I&apos;ve got.
      </SectionIntro>
      <Table>
        {ROWS.map((row) => (
          <RowItem key={row.platform}>
            <RowNumberCol>
              <RowDisplay $accent={row.accent}>{row.display}</RowDisplay>
              <RowPlatform>{row.platform}</RowPlatform>
            </RowNumberCol>
            <RowBody>
              <MetaRow>
                <RankBadge $accent={row.accent} $tint={row.tint}>
                  {row.rank}
                </RankBadge>
                {row.url && (
                  <ProfileLink href={row.url} target="_blank" rel="noreferrer">
                    View Profile
                  </ProfileLink>
                )}
              </MetaRow>
              <RowNote>{row.note}</RowNote>
            </RowBody>
          </RowItem>
        ))}
      </Table>
    </section>
  );
}
