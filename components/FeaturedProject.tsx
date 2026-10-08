"use client";

import styled, { css } from "styled-components";
import { colors } from "@/lib/theme";
import Eyebrow from "./Eyebrow";
import { GithubIcon } from "./icons";

const SCREENSHOTS = [
  { src: "/projects/fitforge/live-workout.png", alt: "FitForge active workout screen" },
  { src: "/projects/fitforge/statistics.png", alt: "FitForge statistics screen" },
  { src: "/projects/fitforge/calendar.png", alt: "FitForge calendar screen" },
];

const HIGHLIGHTS = [
  {
    lead: "Log fast.",
    rest: "Live workout tracking built for the gym, not a spreadsheet after the fact.",
  },
  {
    lead: "Train your way.",
    rest: "Custom routines and freeform logging for lifts that don't fit a template.",
  },
  {
    lead: "See the progress.",
    rest: "Full history and analytics that show whether you're actually getting stronger.",
  },
  {
    lead: "Own your data.",
    rest: "Offline-first, no ads, no paywalls.",
  },
];

const Card = styled.section`
  background: ${colors.pillBg};
  border-radius: 16px;
  padding: 64px;
  margin-top: 80px;
  margin-bottom: 64px;
  box-shadow: 0 24px 48px rgba(10, 12, 16, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  @media (max-width: 900px) {
    padding: 32px 24px;
    gap: 32px;
  }
`;

const HeaderGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.5px;
  margin: 0 0 10px;
  color: ${colors.text};
`;

const Tagline = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: ${colors.brand};
  margin: 0;
`;

const Description = styled.p`
  font-size: 17px;
  line-height: 26px;
  color: ${colors.text};
  max-width: 640px;
  text-align: center;
  margin: 0 auto;
`;

const FeatureGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 32px 40px;
  max-width: 720px;
  margin: 0 auto;
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
`;

const FeatureDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${colors.brand};
`;

const FeatureLead = styled.h3`
  font-size: 17px;
  font-weight: 700;
  line-height: 24px;
  color: ${colors.text};
  margin: 0;
`;

const FeatureText = styled.p`
  font-size: 15px;
  line-height: 22px;
  color: ${colors.textMuted};
  margin: 0;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

const ctaBase = css`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 14px 24px;
  border: 2px solid transparent;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
`;

const PrimaryButton = styled.a`
  ${ctaBase}
  background: ${colors.showMoreBg};
  border-color: ${colors.showMoreBg};
  color: ${colors.white};

  &:hover {
    filter: brightness(1.1);
  }
`;

const SecondaryButton = styled.a`
  ${ctaBase}
  background: transparent;
  border-color: ${colors.showMoreBg};
  color: ${colors.showMoreBg};

  &:hover {
    background: ${colors.showMoreBg};
    color: ${colors.white};
  }
`;

const ScreenshotRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 28px;

  @media (max-width: 900px) {
    overflow-x: auto;
    justify-content: flex-start;
    padding-bottom: 4px;
  }
`;

const PhoneBezel = styled.div`
  position: relative;
  flex-shrink: 0;
  background: ${colors.showMoreBg};
  border-radius: 42px;
  padding: 34px 14px 14px;
  box-shadow: 0 20px 40px rgba(10, 12, 16, 0.22);

  &:nth-child(2) {
    transform: translateY(-24px);
  }
`;

const Notch = styled.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 18px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.85);
`;

const ScreenshotFrame = styled.img`
  display: block;
  width: 220px;
  height: auto;
  border-radius: 22px;
`;

export default function FeaturedProject() {
  return (
    <Card id="projects">
      <HeaderGroup>
        <Eyebrow>Featured Project</Eyebrow>
        <Title>FitForge</Title>
        <Tagline>Strava for strength training.</Tagline>
      </HeaderGroup>
      <ScreenshotRow>
        {SCREENSHOTS.map((shot) => (
          <PhoneBezel key={shot.src}>
            <Notch />
            <ScreenshotFrame src={shot.src} alt={shot.alt} />
          </PhoneBezel>
        ))}
      </ScreenshotRow>
      <Description>
        FitForge is a weight training app built for lifters who want their data, not a
        subscription funnel. Log sets in seconds, build routines that fit how you actually
        train, and watch your numbers move over time. No ads, no paywalls, just the workout.
      </Description>
      <FeatureGrid>
        {HIGHLIGHTS.map((item) => (
          <FeatureItem key={item.lead}>
            <FeatureDot />
            <FeatureLead>{item.lead}</FeatureLead>
            <FeatureText>{item.rest}</FeatureText>
          </FeatureItem>
        ))}
      </FeatureGrid>
      <ButtonRow>
        {/* TODO: swap in the real Play Store listing URL */}
        <PrimaryButton href="#" target="_blank" rel="noreferrer">
          Get it on Google Play
        </PrimaryButton>
        <SecondaryButton href="https://github.com/ChinmayKarnik/FitForge" target="_blank" rel="noreferrer">
          <GithubIcon size={18} />
          View on GitHub
        </SecondaryButton>
      </ButtonRow>
    </Card>
  );
}
