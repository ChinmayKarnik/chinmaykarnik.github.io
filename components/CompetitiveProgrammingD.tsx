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
    note: "Codeforces was the most competitive and well-known platform, with weekly contests. The problems were original, not the templated interview-style ones. I stuck with it for years and peaked at International Master, 2326.",
  },
  {
    platform: "CodeChef",
    accent: "#0e7490",
    tint: "rgba(14, 116, 144, 0.1)",
    display: "2318",
    rank: "6-Star",
    url: "https://www.codechef.com/users/chinmaykarnik",
    note: "I was also active on CodeChef, especially the long challenges that ran for ten days. With no clock to race, I could try an idea, watch it fail, and just try the next one. Peaked at 2318, 6-Star.",
  },
  {
    platform: "ACM ICPC",
    accent: colors.rainbow[1],
    tint: "rgba(30, 41, 169, 0.1)",
    display: "2021",
    rank: "Regional Finalist",
    note: "It was a privilege to be a Regional Finalist at ACM ICPC 2021. My teammates were from college, and the three of us shared one computer, dividing up problems and bouncing ideas off each other the whole round. We went up against the best programmers and colleges in the country.",
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

    /* No border below the last row, so its padding only widened the gap
       to the next section. */
    &:last-child {
      padding-bottom: 0;
    }
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

  /* Bigger tap area on phones; the negative margin keeps the layout as is. */
  @media (max-width: 640px) {
    padding: 10px 0;
    margin: -10px 0;
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
        My brother got me into competitive programming in college. He&apos;d already cracked IOI
        and was deep in the community, and I came in already primed for it, logic puzzles and
        math olympiads had been my thing since I was a kid. The combination of problem solving
        and code stuck fast, and it became my primary hobby for most of college. I still solve
        the odd problem now, though most of my progress came during the years I was most active.
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
