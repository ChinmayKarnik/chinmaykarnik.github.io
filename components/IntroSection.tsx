"use client";

import Image from "next/image";
import styled, { css } from "styled-components";
import { colors } from "@/lib/theme";
import Container from "./Container";

const IntroInner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 56px;
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
  color: ${colors.brand};
  margin: 0;
`;

const Bio = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.textMuted};
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

const ctaBase = css`
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 15px;
  padding: 12px 24px;
  border-radius: 8px;
  border: 2px solid transparent;
  text-decoration: none;
  transition: all 0.2s ease;
`;

const PrimaryCta = styled.a`
  ${ctaBase}
  background: ${colors.showMoreBg};
  border-color: ${colors.showMoreBg};
  color: ${colors.white};

  &:hover {
    filter: brightness(1.15);
  }
`;

const SecondaryCta = styled.a`
  ${ctaBase}
  background: transparent;
  border-color: ${colors.showMoreBg};
  color: ${colors.showMoreBg};

  &:hover {
    background: ${colors.showMoreBg};
    color: ${colors.white};
  }
`;

const PhotoWrap = styled.div`
  position: relative;
  flex-shrink: 0;
`;

const PhotoBackdrop = styled.div`
  position: absolute;
  inset: -14px;
  border-radius: 50%;
  background: ${colors.pillBg};
`;

const PhotoFrame = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  overflow: hidden;
  background: ${colors.hillLight};
  border: 4px solid ${colors.white};
  box-shadow: 0 16px 32px rgba(10, 12, 16, 0.14);

  @media (max-width: 640px) {
    width: 150px;
    height: 150px;
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
      <PhotoWrap>
        <PhotoBackdrop />
        <PhotoFrame>
          <PhotoImg
            src="/profile-photo.jpg"
            alt="Chinmay Karnik"
            width={220}
            height={220}
            priority
          />
        </PhotoFrame>
      </PhotoWrap>
    </IntroInner>
  );
}
