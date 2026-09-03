"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import Eyebrow from "./Eyebrow";

type Project = {
  name: string;
  tagline?: string;
  description: string;
  url?: string;
};

const PROJECTS: Project[] = [
  {
    name: "FitForge",
    tagline: "Strava for strength training.",
    description:
      "A mobile app to log, track, and analyze weight training workouts. Supports live logging, backdated entries, and reusable custom routines, with a calendar view and stats to track progress over time.",
    url: "https://github.com/ChinmayKarnik/FitForge",
  },
  {
    name: "ChessTourney",
    tagline: "Fair chess tournaments for players with different skill levels.",
    description:
      "A mobile app for running casual chess tournaments with live standings and match history, built around piece-odds handicaps so players of different skill levels can compete fairly. Verifies players and pulls results live via the Lichess API — no backend required.",
    url: "https://github.com/ChinmayKarnik/ChessTourney",
  },
  {
    name: "Tooltip",
    tagline: "Published as rn-lightweight-tooltip on npm.",
    description:
      "A lightweight, non-modal tooltip component for React Native — customizable and performant, and drops into any screen without blocking interaction.",
    url: "https://github.com/ChinmayKarnik/Tooltip",
  },
];

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = styled.article`
  padding: 40px 0;
  border-bottom: 1px solid ${colors.hillLight};

  &:first-child {
    padding-top: 0;
  }
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
  line-height: 33px;
  margin: 0 0 6px;
  color: ${colors.text};
`;

const Subtitle = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: ${colors.textMuted};
  margin: 0 0 12px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.text};
  margin: 0 0 16px;
`;

const ShowMoreLink = styled.a`
  font-weight: 700;
  font-size: 16px;
  color: ${colors.text};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function ArticleList() {
  return (
    <section id="projects">
      <Eyebrow>Projects</Eyebrow>
      <List>
        {PROJECTS.map((project) => (
          <Card key={project.name}>
            <Title>{project.name}</Title>
            {project.tagline && <Subtitle>{project.tagline}</Subtitle>}
            <Description>{project.description}</Description>
            {project.url && (
              <ShowMoreLink href={project.url} target="_blank" rel="noreferrer">
                Show More
              </ShowMoreLink>
            )}
          </Card>
        ))}
      </List>
    </section>
  );
}
