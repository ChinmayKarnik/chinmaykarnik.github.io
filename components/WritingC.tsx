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
  margin: 0 0 28px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

const Card = styled.a`
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: ${colors.white};
  border: 1px solid ${colors.hillLight};
  border-radius: 16px;
  padding: 24px;
  color: inherit;
  text-decoration: none;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 16px 32px rgba(10, 12, 16, 0.1);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid ${colors.footerText};
    outline-offset: 2px;
  }
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const DateText = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${colors.eyebrowPink};
`;

const ArrowBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${colors.hillLight};
  color: ${colors.footerText};
`;

const Title = styled.h3`
  font-size: 17px;
  font-weight: 700;
  line-height: 23px;
  color: ${colors.text};
  margin: 0;
`;

const Excerpt = styled.p`
  font-size: 14px;
  line-height: 21px;
  color: ${colors.textMuted};
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  padding-top: 4px;
`;

const TagLine = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${colors.textMutedLight};
`;

const ReadTime = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${colors.textMutedLight};
  flex-shrink: 0;
`;

export default function WritingC() {
  return (
    <section id="writing">
      <Eyebrow>Writing</Eyebrow>
      <IntroText>
        I write mostly as notes to future me, posts that start from something I just
        built and had to think through. That means tools and workarounds from using AI
        day to day as an engineer, and the occasional deep dive into a side project
        like FitForge.
      </IntroText>
      <Grid>
        {POSTS.map((post) => (
          <Card key={post.title} href={post.url} target="_blank" rel="noreferrer">
            <CardTop>
              <DateText>{post.date}</DateText>
              <ArrowBadge>
                <ArrowRightIcon size={14} strokeWidth={2.5} />
              </ArrowBadge>
            </CardTop>
            <Title>{post.title}</Title>
            <Excerpt>{post.excerpt}</Excerpt>
            <CardFooter>
              <TagLine>{post.tags.map((tag) => `#${tag}`).join(" ")}</TagLine>
              <ReadTime>{post.readingTime} min</ReadTime>
            </CardFooter>
          </Card>
        ))}
      </Grid>
      <ShowMoreButton href="https://dev.to/chinmaykarnik" label="More on dev.to" />
    </section>
  );
}
