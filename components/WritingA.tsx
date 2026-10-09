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

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FeaturedLabel = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: ${colors.eyebrowPink};
  margin-bottom: 10px;
`;

const FeaturedCard = styled.a`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: ${colors.white};
  border: 1px solid ${colors.hillLight};
  border-left: 6px solid ${colors.sky};
  border-radius: 16px;
  padding: 32px 36px;
  color: inherit;
  text-decoration: none;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    border-color: ${colors.footerText};
    box-shadow: 0 20px 40px rgba(10, 12, 16, 0.1);
  }

  &:focus-visible {
    outline: 2px solid ${colors.footerText};
    outline-offset: 2px;
  }

  @media (max-width: 640px) {
    padding: 24px;
  }
`;

const FeaturedTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  line-height: 29px;
  color: ${colors.text};
  margin: 0;
`;

const FeaturedExcerpt = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.textMuted};
  margin: 0;
  max-width: 640px;
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

const FeaturedFooter = styled.div`
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
  gap: 8px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.white};
  background: ${colors.showMoreBg};
  padding: 10px 18px;
  border-radius: 8px;
  flex-shrink: 0;
`;

const CompactList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const CompactRow = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px 4px;
  border-top: 1px solid ${colors.hillLight};
  color: inherit;
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.6;
  }

  &:focus-visible {
    outline: 2px solid ${colors.footerText};
    outline-offset: 2px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
`;

const CompactTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.text};
`;

const CompactMeta = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  color: ${colors.textMutedLight};
  flex-shrink: 0;
`;

export default function WritingA() {
  const [featured, ...rest] = POSTS;
  return (
    <section id="writing">
      <Eyebrow>Writing</Eyebrow>
      <IntroText>
        I write mostly as notes to future me, posts that start from something I just
        built and had to think through. That means tools and workarounds from using AI
        day to day as an engineer, and the occasional deep dive into a side project
        like FitForge.
      </IntroText>
      <Stack>
        <div>
          <FeaturedLabel>Latest</FeaturedLabel>
          <FeaturedCard href={featured.url} target="_blank" rel="noreferrer">
            <FeaturedTitle>{featured.title}</FeaturedTitle>
            <FeaturedExcerpt>{featured.excerpt}</FeaturedExcerpt>
            <TagRow>
              {featured.tags.map((tag) => (
                <TagPill key={tag}>#{tag}</TagPill>
              ))}
            </TagRow>
            <FeaturedFooter>
              <MetaText>
                {featured.readingTime} min read · {featured.date}
              </MetaText>
              <ReadCta>
                Read on dev.to
                <ArrowRightIcon size={16} strokeWidth={2} />
              </ReadCta>
            </FeaturedFooter>
          </FeaturedCard>
        </div>
        <CompactList>
          {rest.map((post) => (
            <li key={post.title}>
              <CompactRow href={post.url} target="_blank" rel="noreferrer">
                <CompactTitle>{post.title}</CompactTitle>
                <CompactMeta>
                  {post.readingTime} min read · {post.date}
                  <ArrowRightIcon size={16} strokeWidth={2} />
                </CompactMeta>
              </CompactRow>
            </li>
          ))}
        </CompactList>
      </Stack>
      <ShowMoreButton href="https://dev.to/chinmaykarnik" label="More on dev.to" />
    </section>
  );
}
