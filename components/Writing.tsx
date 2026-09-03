"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import Eyebrow from "./Eyebrow";
import { ArrowRightIcon } from "./icons";

const POSTS = [
  {
    title: "I Built My Own Context Index Before Claude Code Had Skills and Memory",
    url: "https://dev.to/chinmaykarnik/i-built-my-own-context-index-before-claude-code-had-skills-and-memory-iho",
  },
  {
    title: "I built FitForge because every weight training app came with stuff I didn't ask for",
    url: "https://dev.to/chinmaykarnik/i-built-fitforge-because-every-weight-training-app-came-with-stuff-i-didnt-ask-for-5573",
  },
];

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

export default function Writing() {
  return (
    <section id="writing">
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
      <MoreLink href="https://dev.to/chinmaykarnik" target="_blank" rel="noreferrer">
        More on dev.to
      </MoreLink>
    </section>
  );
}
