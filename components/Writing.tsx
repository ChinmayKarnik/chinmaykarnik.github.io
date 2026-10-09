"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import Eyebrow from "./Eyebrow";
import ShowMoreButton from "./ShowMoreButton";
import { ArrowRightIcon } from "./icons";

type Post = {
  title: string;
  url: string;
  excerpt: string;
  date: string;
  readingTime: number;
  tags: string[];
};

const POSTS: Post[] = [
  {
    title: "I Built My Own Context Index Before Claude Code Had Skills and Memory",
    url: "https://dev.to/chinmaykarnik/i-built-my-own-context-index-before-claude-code-had-skills-and-memory-iho",
    excerpt:
      "A personal index-and-retrieval system for keeping project knowledge out of the context window until it's actually needed, built before Claude Code shipped Skills and Memory of its own.",
    date: "Sep 2026",
    readingTime: 6,
    tags: ["ai", "claude", "productivity"],
  },
  {
    title: "I built FitForge because every weight training app came with stuff I didn't ask for",
    url: "https://dev.to/chinmaykarnik/i-built-fitforge-because-every-weight-training-app-came-with-stuff-i-didnt-ask-for-5573",
    excerpt:
      "Strava doesn't have a real weight training mode, and the apps that do are buried under meal plans and calorie counters. So I built FitForge, a simple app for logging workouts.",
    date: "Aug 2026",
    readingTime: 5,
    tags: ["reactnative", "typescript", "androiddev"],
  },
];

const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PostCard = styled.a`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: ${colors.white};
  border: 1px solid ${colors.hillLight};
  border-left: 4px solid ${colors.sky};
  border-radius: 16px;
  padding: 24px 28px;
  color: inherit;
  text-decoration: none;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    border-color: ${colors.footerText};
    box-shadow: 0 16px 32px rgba(10, 12, 16, 0.08);
  }

  &:focus-visible {
    outline: 2px solid ${colors.footerText};
    outline-offset: 2px;
  }

  @media (max-width: 640px) {
    padding: 20px;
  }
`;

const PostTitle = styled.h3`
  font-size: 19px;
  font-weight: 700;
  line-height: 26px;
  color: ${colors.text};
  margin: 0;
`;

const PostExcerpt = styled.p`
  font-size: 15px;
  line-height: 22px;
  color: ${colors.textMuted};
  margin: 0;
`;

const TagRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const TagPill = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${colors.footerText};
  background: ${colors.hillLight};
  padding: 3px 10px;
  border-radius: 1000px;
`;

const PostFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 4px;
`;

const MetaText = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: ${colors.textMutedLight};
`;

const ReadCta = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.text};
  flex-shrink: 0;
`;

export default function Writing() {
  return (
    <section id="writing">
      <Eyebrow>Writing</Eyebrow>
      <List>
        {POSTS.map((post) => (
          <li key={post.title}>
            <PostCard href={post.url} target="_blank" rel="noreferrer">
              <PostTitle>{post.title}</PostTitle>
              <PostExcerpt>{post.excerpt}</PostExcerpt>
              <TagRow>
                {post.tags.map((tag) => (
                  <TagPill key={tag}>#{tag}</TagPill>
                ))}
              </TagRow>
              <PostFooter>
                <MetaText>
                  {post.readingTime} min read · {post.date}
                </MetaText>
                <ReadCta>
                  Read on dev.to
                  <ArrowRightIcon size={16} strokeWidth={2} />
                </ReadCta>
              </PostFooter>
            </PostCard>
          </li>
        ))}
      </List>
      <ShowMoreButton href="https://dev.to/chinmaykarnik" label="More on dev.to" />
    </section>
  );
}
