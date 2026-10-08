"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import Eyebrow from "./Eyebrow";

type Row = {
  platform: string;
  accent: string;
  display: string;
  meta: string;
  note: string;
};

const ROWS: Row[] = [
  {
    platform: "Codeforces",
    accent: colors.rainbow[1],
    display: "2326",
    meta: "International Master · codeforces.com/profile/ChinmayKarnik",
    note: "Most evenings still end with a Div. 2 or Div. 3 round open in a tab I tell myself I'll just skim, and most of the time I end up solving the first three problems before I remember I had other plans. 2326 took a long stretch of plateaus to reach, including a few genuinely humbling rounds where I lost more rating in twenty minutes than I'd gained in the previous month. Grandmaster is the next marker, and I'm not in a hurry to get there, mostly because the version of me that rushes tends to make the same silly mistake on problem B over and over.",
  },
  {
    platform: "CodeChef",
    accent: colors.rainbow[2],
    display: "2175",
    meta: "5★, Division 1 · codechef.com/users/chinmaykarnik",
    note: "2175 is both where I am right now and the highest I've ever been, which either means I'm improving or I've just been lucky in the last few long challenges. Unlike Codeforces, CodeChef's long format gives you days instead of minutes, and that changes the skill entirely: less about typing fast under pressure, more about sitting with a hard idea until it gives something up. Division 1 feels less like a ceiling and more like the point where the next jump needs a genuinely different approach than the one that got me here.",
  },
  {
    platform: "ACM ICPC",
    accent: colors.rainbow[4],
    display: "2021",
    meta: "Regional Finalist",
    note: "No continuous rating here, just one shot at a whiteboard with two teammates and a single shared keyboard. Regionals was the first time competitive programming felt like a team sport instead of a solo grind, and the prep leading up to it, three of us arguing over approach on problems we'd already half-solved individually, taught me more about actually communicating an idea than years of solo contests ever did. I still think about a couple of the problems we didn't get to in time.",
  },
];

const SectionIntro = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.text};
  max-width: 640px;
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

  &:last-child {
    border-bottom: 1px solid ${colors.hillLight};
  }

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
  gap: 8px;
`;

const RowMeta = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${colors.textMutedLight};
`;

const RowNote = styled.p`
  font-size: 15.5px;
  line-height: 24px;
  color: ${colors.text};
  margin: 0;
  max-width: 640px;
`;

export default function CompetitiveProgrammingB() {
  return (
    <section id="competitive-programming">
      <Eyebrow>Competitive Programming</Eyebrow>
      <SectionIntro>
        Started grinding problems back at VNIT and never really stopped. Ratings are a vanity
        metric, sure, but they&apos;re also the most honest scoreboard I&apos;ve got, and I like
        having a record of progress that isn&apos;t just a gut feeling.
      </SectionIntro>
      <Table>
        {ROWS.map((row) => (
          <RowItem key={row.platform}>
            <RowNumberCol>
              <RowDisplay $accent={row.accent}>{row.display}</RowDisplay>
              <RowPlatform>{row.platform}</RowPlatform>
            </RowNumberCol>
            <RowBody>
              <RowMeta>{row.meta}</RowMeta>
              <RowNote>{row.note}</RowNote>
            </RowBody>
          </RowItem>
        ))}
      </Table>
    </section>
  );
}
