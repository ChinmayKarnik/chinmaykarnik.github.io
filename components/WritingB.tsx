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

const IntroText = styled.p`
  font-size: 16px;
  line-height: 25px;
  color: ${colors.text};
  max-width: 640px;
  margin: 0 0 32px;
`;

const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid ${colors.hillLight};
`;

const Row = styled.a`
  display: flex;
  gap: 32px;
  padding: 28px 0;
  border-bottom: 1px solid ${colors.hillLight};
  color: inherit;
  text-decoration: none;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 8px;
    padding: 20px 0;
  }

  &:focus-visible {
    outline: 2px solid ${colors.footerText};
    outline-offset: 2px;
  }
`;

const MetaCol = styled.div`
  flex-shrink: 0;
  width: 120px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 3px;

  @media (max-width: 640px) {
    width: auto;
    flex-direction: row;
    gap: 10px;
  }
`;

const DateText = styled.span`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.3px;
  color: ${colors.textMutedLight};
`;

const ReadTimeText = styled.span`
  font-size: 13px;
  color: ${colors.textMutedLight};
`;

const ContentCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 0;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h3`
  font-size: 19px;
  font-weight: 700;
  line-height: 26px;
  color: ${colors.text};
  margin: 0;
  transition: color 0.2s ease;

  ${Row}:hover & {
    color: ${colors.brand};
  }
`;

const Arrow = styled.span`
  display: inline-flex;
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.2s ease, transform 0.2s ease;
  color: ${colors.brand};

  ${Row}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Excerpt = styled.p`
  font-size: 15px;
  line-height: 22px;
  color: ${colors.textMuted};
  margin: 0;
  max-width: 600px;
`;

const TagLine = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: ${colors.footerText};
`;

export default function WritingB() {
  return (
    <section id="writing">
      <Eyebrow>Writing</Eyebrow>
      <IntroText>
        I write mostly as notes to future me, posts that start from something I just
        built and had to think through. That means tools and workarounds from using AI
        day to day as an engineer, and the occasional deep dive into a side project
        like FitForge.
      </IntroText>
      <List>
        {POSTS.map((post) => (
          <li key={post.title}>
            <Row href={post.url} target="_blank" rel="noreferrer">
              <MetaCol>
                <DateText>{post.date}</DateText>
                <ReadTimeText>{post.readingTime} min read</ReadTimeText>
              </MetaCol>
              <ContentCol>
                <TitleRow>
                  <Title>{post.title}</Title>
                  <Arrow>
                    <ArrowRightIcon size={18} strokeWidth={2} />
                  </Arrow>
                </TitleRow>
                <Excerpt>{post.excerpt}</Excerpt>
                <TagLine>{post.tags.map((tag) => `#${tag}`).join("  ")}</TagLine>
              </ContentCol>
            </Row>
          </li>
        ))}
      </List>
      <ShowMoreButton href="https://dev.to/chinmaykarnik" label="More on dev.to" />
    </section>
  );
}
