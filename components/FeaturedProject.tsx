"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import Eyebrow from "./Eyebrow";
import { ArrowRightIcon, GithubIcon } from "./icons";

const SCREENSHOTS = [
  { src: "/projects/fitforge/live-workout.png", alt: "FitForge active workout screen" },
  { src: "/projects/fitforge/statistics.png", alt: "FitForge statistics screen" },
  { src: "/projects/fitforge/calendar.png", alt: "FitForge calendar screen" },
];

const HIGHLIGHTS = [
  "React Native + TypeScript, shipped to the Play Store",
  "Live workout logging, backdated entries, and reusable custom routines",
  "Calendar view and stats to track progress over time",
];

const Card = styled.section`
  background: ${colors.pillBg};
  border-radius: 16px;
  padding: 48px;
  margin-bottom: 64px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 48px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 32px 24px;
    gap: 32px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0 0 8px;
  color: ${colors.text};
`;

const Tagline = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.footerText};
  margin: 0 0 16px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.text};
  margin: 0 0 20px;
`;

const HighlightList = styled.ul`
  list-style: none;
  margin: 0 0 28px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HighlightItem = styled.li`
  display: flex;
  align-items: baseline;
  gap: 10px;
  font-size: 15px;
  line-height: 22px;
  color: ${colors.text};

  &::before {
    content: "";
    flex-shrink: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${colors.brand};
    transform: translateY(-4px);
  }
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: ${colors.showMoreBg};
  color: ${colors.white};
  border-radius: 8px;
  padding: 14px 24px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    filter: brightness(1.1);
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: ${colors.white};
  color: ${colors.text};
  border-radius: 8px;
  padding: 14px 24px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    filter: brightness(0.97);
  }
`;

const ScreenshotRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media (max-width: 900px) {
    overflow-x: auto;
    justify-content: flex-start;
    padding-bottom: 4px;
  }
`;

const ScreenshotFrame = styled.img`
  width: 140px;
  height: auto;
  border-radius: 14px;
  box-shadow: 0 16px 32px rgba(10, 12, 16, 0.18);
  flex-shrink: 0;

  &:nth-child(2) {
    transform: translateY(-16px);
  }
`;

export default function FeaturedProject() {
  return (
    <Card id="projects">
      <div>
        <Eyebrow>Featured Project</Eyebrow>
        <Title>FitForge</Title>
        <Tagline>Strava for strength training.</Tagline>
        <Description>
          A mobile app to log, track, and analyze weight training workouts — built for lifters
          who want their data without the bloat every other app bundles in.
        </Description>
        <HighlightList>
          {HIGHLIGHTS.map((item) => (
            <HighlightItem key={item}>{item}</HighlightItem>
          ))}
        </HighlightList>
        <ButtonRow>
          {/* placeholder — no public Play Store listing wired up yet */}
          <PrimaryButton href="#">
            Get it on Google Play
            <ArrowRightIcon size={16} />
          </PrimaryButton>
          <SecondaryButton href="https://github.com/ChinmayKarnik/FitForge" target="_blank" rel="noreferrer">
            <GithubIcon size={18} />
            View on GitHub
          </SecondaryButton>
        </ButtonRow>
      </div>
      <ScreenshotRow>
        {SCREENSHOTS.map((shot) => (
          <ScreenshotFrame key={shot.src} src={shot.src} alt={shot.alt} />
        ))}
      </ScreenshotRow>
    </Card>
  );
}
