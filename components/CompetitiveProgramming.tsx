"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import Eyebrow from "./Eyebrow";

type CPStat = {
  platform: string;
  stat: string;
  detail: string;
  note: string;
  url?: string;
};

const CP_STATS: CPStat[] = [
  {
    platform: "Codeforces",
    stat: "2326",
    detail: "International Master",
    note: "Most evenings still end with a Div. 2 or Div. 3 round open in a tab I tell myself I'll just skim. Chasing Grandmaster one rated contest at a time.",
    url: "https://codeforces.com/profile/ChinmayKarnik",
  },
  {
    platform: "CodeChef",
    stat: "2175",
    detail: "5★, Div 1",
    note: "2175 is both where I am right now and the highest I've ever been, no plateau long enough yet to call it a ceiling. The long challenges taught me to sit with a problem for days instead of minutes, a different skill from speed-solving.",
    url: "https://www.codechef.com/users/chinmaykarnik",
  },
  {
    platform: "ACM ICPC",
    stat: "2021",
    detail: "Regional Finalist",
    note: "Regionals was the first time this felt like a team sport instead of a solo grind. Still the best whiteboard arguments I've had with anyone.",
  },
];

const SectionIntro = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.text};
  max-width: 640px;
  margin: 0 0 28px;
`;

const StatList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StatCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: ${colors.pillBg};
  border-radius: 12px;
  padding: 18px 20px;
  text-decoration: none;
  color: inherit;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.97);
  }
`;

const StatHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
`;

const StatPlatform = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.text};
`;

const StatValue = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
`;

const StatNumber = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.text};
`;

const StatDetail = styled.span`
  font-size: 13px;
  color: ${colors.textMuted};
`;

const StatNote = styled.p`
  font-size: 14px;
  line-height: 21px;
  color: ${colors.textMuted};
  margin: 0;
`;

export default function CompetitiveProgramming() {
  return (
    <section id="competitive-programming">
      <Eyebrow>Competitive Programming</Eyebrow>
      <SectionIntro>
        Started grinding problems back at VNIT and never really stopped. Ratings are a vanity
        metric, sure, but they&apos;re also the most honest scoreboard I&apos;ve got.
      </SectionIntro>
      <StatList>
        {CP_STATS.map((cp) => (
          <StatCard key={cp.platform} as={cp.url ? "a" : "div"} href={cp.url} target={cp.url ? "_blank" : undefined} rel={cp.url ? "noreferrer" : undefined}>
            <StatHeader>
              <StatPlatform>{cp.platform}</StatPlatform>
              <StatValue>
                <StatNumber>{cp.stat}</StatNumber>
                <StatDetail>{cp.detail}</StatDetail>
              </StatValue>
            </StatHeader>
            <StatNote>{cp.note}</StatNote>
          </StatCard>
        ))}
      </StatList>
    </section>
  );
}
