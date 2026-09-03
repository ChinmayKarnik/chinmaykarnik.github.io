"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import Eyebrow from "./Eyebrow";
import { ArrowRightIcon } from "./icons";

const PILLS = [
  "Lorem",
  "Ipsum",
  "Dolor",
  "Sit",
  "Amet",
  "Consectetur",
  "Adipiscing",
  "Elit",
];

const POPULAR = [
  "An Interactive Guide to Lorem",
  "A Modern Ipsum Reset",
  "The Sit Amet Handbook",
];

const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 44px;
`;

const PillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Pill = styled.a`
  background: ${colors.pillBg};
  color: ${colors.text};
  font-size: 14px;
  font-weight: 600;
  padding: 8px 14px;
  border-radius: 999px;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    filter: brightness(0.96);
  }
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

export default function Sidebar() {
  return (
    <SidebarWrapper>
      <div>
        <Eyebrow>Browse by Category</Eyebrow>
        <PillGrid>
          {PILLS.map((pill) => (
            <Pill key={pill} href="#">
              {pill}
            </Pill>
          ))}
        </PillGrid>
      </div>

      <div>
        <Eyebrow>Popular Content</Eyebrow>
        <PopularList>
          {POPULAR.map((item) => (
            <PopularItem key={item}>
              <ArrowRightIcon size={14} />
              <PopularLink href="#">{item}</PopularLink>
            </PopularItem>
          ))}
        </PopularList>
      </div>
    </SidebarWrapper>
  );
}
