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

const PopularList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// Josh's list item has no layout of its own — the <a> itself is the full-row
// flex container (icon + text), so the whole row is clickable, not just the text.
const IconWrap = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  margin-top: 4px;
`;

const PopularLink = styled.a`
  display: flex;
  gap: 16px;
  font-weight: 500;
  font-size: 19px;
  color: ${colors.text};
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    color: ${colors.brand};
  }

  &:focus-visible {
    outline: 2px solid ${colors.brand};
    outline-offset: 2px;
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
          <li key={post.title}>
            <PopularLink href={post.url} target="_blank" rel="noreferrer">
              <IconWrap>
                <ArrowRightIcon size={20} strokeWidth={2} />
              </IconWrap>
              {post.title}
            </PopularLink>
          </li>
        ))}
      </PopularList>
      <MoreLink href="https://dev.to/chinmaykarnik" target="_blank" rel="noreferrer">
        More on dev.to
      </MoreLink>
    </section>
  );
}
