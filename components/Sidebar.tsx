"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import Eyebrow from "./Eyebrow";
import { ArrowRightIcon } from "./icons";

type CPStat = {
  platform: string;
  stat: string;
  detail: string;
};

const CP_STATS: CPStat[] = [
  { platform: "Codeforces", stat: "2326", detail: "International Master" },
  { platform: "CodeChef", stat: "2354", detail: "6★ Rated" },
  { platform: "ACM ICPC", stat: "2021", detail: "Regional Finalist" },
];

const POSTS = [
  { title: "[dev.to post title 1]", url: "https://dev.to/" },
  { title: "[dev.to post title 2]", url: "https://dev.to/" },
];

const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 44px;
`;

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

const PopularList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PopularItem = styled.li`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

const PopularLink = styled.a`
  font-weight: 700;
  font-size: 15px;
  color: ${colors.text};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const MoreLink = styled.a`
  display: inline-block;
  margin-top: 12px;
  font-weight: 700;
  font-size: 14px;
  color: ${colors.text};
  text-decoration: underline;
`;

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <div id="cp">
        <Eyebrow>Competitive Programming</Eyebrow>
        <StatList>
          {CP_STATS.map((cp) => (
            <StatRow key={cp.platform}>
              <StatPlatform>{cp.platform}</StatPlatform>
              <StatValue>
                <StatNumber>{cp.stat}</StatNumber>
                <StatDetail>{cp.detail}</StatDetail>
              </StatValue>
            </StatRow>
          ))}
        </StatList>
      </div>

      <div id="writing">
        <Eyebrow>Writing</Eyebrow>
        <PopularList>
          {POSTS.map((post) => (
            <PopularItem key={post.title}>
              <ArrowRightIcon size={14} />
              <PopularLink href={post.url} target="_blank" rel="noreferrer">
                {post.title}
              </PopularLink>
            </PopularItem>
          ))}
        </PopularList>
        <MoreLink href="https://dev.to/" target="_blank" rel="noreferrer">
          More on dev.to
        </MoreLink>
      </div>
    </SidebarWrapper>
  );
}
