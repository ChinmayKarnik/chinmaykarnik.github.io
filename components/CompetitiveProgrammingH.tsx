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

const Strip = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid ${colors.hillLight};
  border-bottom: 1px solid ${colors.hillLight};
  margin-bottom: 32px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const StripItem = styled.div`
  padding: 24px 20px;
  text-align: center;

  &:not(:last-child) {
    border-right: 1px solid ${colors.hillLight};
  }

  @media (max-width: 640px) {
    border-right: none;
    border-bottom: 1px solid ${colors.hillLight};

    &:last-child {
      border-bottom: none;
    }
  }
`;

const StripNumber = styled.div<{ $accent: string }>`
  font-size: 40px;
  font-weight: 800;
  letter-spacing: -1px;
  color: ${(p) => p.$accent};
  line-height: 1.1;
`;

const StripPlatform = styled.div`
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  color: ${colors.text};
  margin-top: 6px;
`;

const StripRank = styled.div`
  font-size: 12.5px;
  color: ${colors.textMutedLight};
  margin-top: 2px;
`;

const NoteGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const NoteCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NoteHeading = styled.span<{ $accent: string }>`
  font-size: 12.5px;
  font-weight: 700;
  color: ${(p) => p.$accent};
`;

const NoteText = styled.p`
  font-size: 14.5px;
  line-height: 22px;
  color: ${colors.textMuted};
  margin: 0;
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

export default function CompetitiveProgrammingH() {
  return (
    <section id="competitive-programming">
      <Eyebrow>Competitive Programming</Eyebrow>
      <SectionIntro>
        Started grinding problems back at VNIT and never really stopped. What began as placement
        prep turned into a genuine habit, then something closer to three different habits: fast
        and reflexive, slow and stubborn, and done as a team under pressure. Ratings are a vanity
        metric, but they&apos;re the most honest scoreboard I&apos;ve got.
      </SectionIntro>
      <Strip>
        {ROWS.map((row) => (
          <StripItem key={row.platform}>
            <StripNumber $accent={row.accent}>{row.display}</StripNumber>
            <StripPlatform>{row.platform}</StripPlatform>
            <StripRank>{row.rank}</StripRank>
          </StripItem>
        ))}
      </Strip>
      <NoteGrid>
        {ROWS.map((row) => (
          <NoteCol key={row.platform}>
            <NoteHeading $accent={row.accent}>{row.platform}</NoteHeading>
            <NoteText>{row.note}</NoteText>
            {row.url && (
              <ProfileLink href={row.url} target="_blank" rel="noreferrer">
                View Profile
              </ProfileLink>
            )}
          </NoteCol>
        ))}
      </NoteGrid>
    </section>
  );
}
