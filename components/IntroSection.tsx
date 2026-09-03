"use client";

import Image from "next/image";
import styled from "styled-components";
import { colors } from "@/lib/theme";
import Container from "./Container";

const IntroInner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  padding-top: 64px;
  padding-bottom: 64px;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    text-align: center;
    padding-top: 40px;
    padding-bottom: 40px;
    gap: 24px;
  }
`;

const TextCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 560px;

  @media (max-width: 900px) {
    align-items: center;
  }
`;

const Greeting = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${colors.eyebrowPink};
  margin: 0;
`;

const Name = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -1px;
  color: ${colors.text};
  margin: 0;

  @media (max-width: 640px) {
    font-size: 34px;
  }
`;

const Tagline = styled.p`
  font-size: 22px;
  font-weight: 600;
  line-height: 33px;
  color: ${colors.text};
  margin: 0;
`;

const Bio = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.text};
  margin: 0;
`;

const CtaRow = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 8px;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const PrimaryCta = styled.a`
  background: ${colors.showMoreBg};
  color: ${colors.white};
  font-weight: 700;
  font-size: 15px;
  padding: 12px 22px;
  border-radius: 8px;
  text-decoration: none;

  &:hover {
    filter: brightness(1.1);
  }
`;

const SecondaryCta = styled.a`
  color: ${colors.text};
  font-weight: 700;
  font-size: 15px;
  padding: 12px 22px;
  text-decoration: underline;
`;

const PhotoFrame = styled.div`
  flex-shrink: 0;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  background: ${colors.hillLight};

  @media (max-width: 640px) {
    width: 140px;
    height: 140px;
  }
`;

const PhotoImg = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function IntroSection() {
  return (
    <IntroInner>
      <TextCol>
        <Greeting>Hi, I&apos;m</Greeting>
        <Name>Chinmay Karnik</Name>
        <Tagline>Software Engineer &amp; Competitive Programmer</Tagline>
        <Bio>
          Full-stack, AI-native software engineer. Shipped at Zepto and
          Gameskraft. Codeforces International Master (2326). Building
          FitForge.
        </Bio>
        <CtaRow>
          <PrimaryCta href="#projects">View Projects</PrimaryCta>
          <SecondaryCta href="#contact">Get in touch</SecondaryCta>
        </CtaRow>
      </TextCol>
      <PhotoFrame>
        <PhotoImg
          src="/profile-photo.jpg"
          alt="Chinmay Karnik"
          width={200}
          height={200}
          priority
        />
      </PhotoFrame>
    </IntroInner>
  );
}
