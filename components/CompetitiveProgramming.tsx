"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import Eyebrow from "./Eyebrow";

type CPStat = {
  platform: string;
  stat: string;
  detail: string;
  url?: string;
};

const CP_STATS: CPStat[] = [
  {
    platform: "Codeforces",
    stat: "2326",
    detail: "International Master",
    url: "https://codeforces.com/profile/ChinmayKarnik",
  },
  {
    platform: "CodeChef",
    stat: "2354",
    detail: "6★ Rated",
    url: "https://www.codechef.com/users/chinmaykarnik",
  },
  { platform: "ACM ICPC", stat: "2021", detail: "Regional Finalist" },
];

const StatList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StatRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  background: ${colors.pillBg};
  border-radius: 8px;
  padding: 12px 16px;
  text-decoration: none;

  &:hover {
    filter: brightness(0.97);
  }
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

export default function CompetitiveProgramming() {
  return (
    <section id="competitive-programming">
      <Eyebrow>Competitive Programming</Eyebrow>
      <StatList>
        {CP_STATS.map((cp) => (
          <StatRow
            key={cp.platform}
            as={cp.url ? "a" : "div"}
            href={cp.url}
            target={cp.url ? "_blank" : undefined}
            rel={cp.url ? "noreferrer" : undefined}
          >
            <StatPlatform>{cp.platform}</StatPlatform>
            <StatValue>
              <StatNumber>{cp.stat}</StatNumber>
              <StatDetail>{cp.detail}</StatDetail>
            </StatValue>
          </StatRow>
        ))}
      </StatList>
    </section>
  );
}
