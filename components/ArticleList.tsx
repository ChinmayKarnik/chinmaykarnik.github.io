"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import Eyebrow from "./Eyebrow";

type Project = {
  name: string;
  tagline?: string;
  description: string;
  tech?: string[];
  githubUrl?: string;
  featured?: boolean;
  imagePlaceholder?: string;
};

const PROJECTS: Project[] = [
  {
    name: "FitForge",
    tagline: "Strava for strength training.",
    description:
      "A mobile app to log, track, and analyze weight training workouts. Supports live logging, backdated entries, and reusable custom routines, with a calendar view and stats to track progress over time.",
    tech: ["React Native", "TypeScript"],
    githubUrl: "https://github.com/ChinmayKarnik/FitForge",
    featured: true,
    imagePlaceholder: "FitForge screenshots",
  },
  {
    name: "[Project 2 name]",
    description: "[One or two sentences describing this project.]",
    featured: false,
  },
  {
    name: "[Project 3 name]",
    description: "[One or two sentences describing this project.]",
    featured: false,
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

const ImagePlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 2px dashed ${colors.footerText};
  background: ${colors.hillLight};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.footerText};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
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

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 16px;
`;

const TechTag = styled.span`
  background: ${colors.pillBg};
  color: ${colors.text};
  font-size: 13px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 999px;
`;

const ReadMore = styled.a`
  font-weight: 700;
  font-size: 16px;
  color: ${colors.text};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const PlaceholderNote = styled.p`
  font-size: 14px;
  font-style: italic;
  color: ${colors.textMutedLight};
  margin: 0;
`;

export default function ArticleList() {
  return (
    <section id="projects">
      <Eyebrow>Projects</Eyebrow>
      <List>
        {PROJECTS.map((project) => (
          <Card key={project.name}>
            {project.imagePlaceholder && (
              <ImagePlaceholder>{project.imagePlaceholder}</ImagePlaceholder>
            )}
            <Title>{project.name}</Title>
            {project.tagline && <Subtitle>{project.tagline}</Subtitle>}
            <Description>{project.description}</Description>
            {project.tech && (
              <TechRow>
                {project.tech.map((t) => (
                  <TechTag key={t}>{t}</TechTag>
                ))}
              </TechRow>
            )}
            {project.githubUrl ? (
              <ReadMore href={project.githubUrl} target="_blank" rel="noreferrer">
                View on GitHub
              </ReadMore>
            ) : (
              <PlaceholderNote>[Add project link]</PlaceholderNote>
            )}
          </Card>
        ))}
      </List>
    </section>
  );
}
