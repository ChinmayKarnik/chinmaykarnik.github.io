"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import Eyebrow from "./Eyebrow";
import ShowMoreButton from "./ShowMoreButton";
import { GithubIcon, ArrowRightIcon } from "./icons";

type Screenshot = {
  src: string;
  alt: string;
};

type Project = {
  name: string;
  tagline?: string;
  description: string;
  url?: string;
  screenshots?: Screenshot[];
};

const PROJECTS: Project[] = [
  {
    name: "ChessTourney",
    tagline: "Fair chess tournaments for players with different skill levels.",
    description:
      "A mobile app for running casual chess tournaments with live standings and match history, built around piece-odds handicaps so players of different skill levels can compete fairly. Verifies players and pulls results live via the Lichess API, no backend required.",
    url: "https://github.com/ChinmayKarnik/ChessTourney",
    screenshots: [
      { src: "/projects/chesstourney/tournaments-list.png", alt: "ChessTourney tournaments list screen" },
      { src: "/projects/chesstourney/ongoing-tournament.png", alt: "ChessTourney live tournament standings screen" },
      { src: "/projects/chesstourney/player-matches.png", alt: "ChessTourney player match history screen" },
    ],
  },
  {
    name: "Tooltip",
    tagline: "Published as rn-lightweight-tooltip on npm.",
    description:
      "A lightweight, non-modal tooltip component for React Native. Customizable and performant, and drops into any screen without blocking interaction.",
    url: "https://github.com/ChinmayKarnik/Tooltip",
  },
];

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Card = styled.article`
  background: ${colors.white};
  border: 1px solid ${colors.hillLight};
  border-radius: 20px;
  padding: 36px 40px;
  box-shadow: 0 16px 32px rgba(10, 12, 16, 0.07);

  @media (max-width: 640px) {
    padding: 28px 24px;
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
  margin: 0;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.text};
  max-width: 640px;
  margin: 16px 0;
`;

const ScreenshotRow = styled.div`
  display: flex;
  gap: 24px;
  margin: 20px 0 24px;
  overflow-x: auto;
  padding-bottom: 4px;
`;

const Screenshot = styled.img`
  display: block;
  flex-shrink: 0;
  width: 220px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 16px 32px rgba(10, 12, 16, 0.2);
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

// Slim treatment for projects with no screenshots: a lighter, clearly
// different form factor (not just a smaller card) so the size difference
// next to a screenshot-led card reads as intentional.
const MiniEntry = styled.a`
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: ${colors.white};
  border: 1px solid ${colors.hillLight};
  border-left: 4px solid ${colors.brand};
  border-radius: 16px;
  padding: 28px 32px;
  color: inherit;
  text-decoration: none;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    border-color: ${colors.brand};
    box-shadow: 0 16px 32px rgba(10, 12, 16, 0.08);
  }

  @media (max-width: 640px) {
    padding: 24px;
  }
`;

const MiniHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const MiniIconBadge = styled.div`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(66, 66, 250, 0.1);
  color: ${colors.brand};
`;

const MiniTitle = styled.h3`
  font-size: 19px;
  font-weight: 700;
  color: ${colors.text};
  margin: 0 0 3px;
`;

const MiniTagline = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.textMuted};
  margin: 0;
`;

const MiniDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.text};
  margin: 0;
`;

const MiniFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MiniCta = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.text};
`;

export default function ArticleList() {
  return (
    <section id="other-projects">
      <Eyebrow>Other Projects</Eyebrow>
      <List>
        {PROJECTS.map((project) =>
          project.screenshots ? (
            <Card key={project.name}>
              <Title>{project.name}</Title>
              {project.tagline && <Subtitle>{project.tagline}</Subtitle>}
              <ScreenshotRow>
                {project.screenshots.map((shot) => (
                  <Screenshot key={shot.src} src={shot.src} alt={shot.alt} />
                ))}
              </ScreenshotRow>
              <Description>{project.description}</Description>
              {project.url && (
                <ShowMoreLink href={project.url} target="_blank" rel="noreferrer">
                  View on GitHub
                </ShowMoreLink>
              )}
            </Card>
          ) : (
            <MiniEntry key={project.name} href={project.url} target="_blank" rel="noreferrer">
              <MiniHeader>
                <MiniIconBadge>
                  <GithubIcon size={20} />
                </MiniIconBadge>
                <div>
                  <MiniTitle>{project.name}</MiniTitle>
                  {project.tagline && <MiniTagline>{project.tagline}</MiniTagline>}
                </div>
              </MiniHeader>
              <MiniDescription>{project.description}</MiniDescription>
              <MiniFooter>
                <MiniCta>
                  View on GitHub
                  <ArrowRightIcon size={16} strokeWidth={2} />
                </MiniCta>
              </MiniFooter>
            </MiniEntry>
          )
        )}
      </List>
      <ShowMoreButton />
    </section>
  );
}
