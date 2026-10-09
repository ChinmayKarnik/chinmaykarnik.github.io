"use client";

import styled, { css } from "styled-components";
import { colors } from "@/lib/theme";
import Eyebrow from "./Eyebrow";
import { CalendarIcon, GithubIcon, LinkedinIcon } from "./icons";

const EMAIL = "hello@chinmaykarnik.com";
const CAL_URL = "https://cal.com/chinmay-karnik-6ygfgj/30min";

const Card = styled.section`
  background: ${colors.pillBg};
  border-radius: 16px;
  padding: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  box-shadow: 0 24px 48px rgba(10, 12, 16, 0.1);

  @media (max-width: 900px) {
    padding: 32px 24px;
    gap: 20px;
  }
`;

const Heading = styled.h2`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -1px;
  color: ${colors.text};
  margin: 0;

  @media (max-width: 640px) {
    font-size: 26px;
  }
`;

const Lead = styled.p`
  font-size: 17px;
  line-height: 26px;
  color: ${colors.textMuted};
  max-width: 480px;
  margin: 0;
`;

const EmailLink = styled.a`
  font-size: 22px;
  font-weight: 700;
  color: ${colors.brand};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 640px) {
    font-size: 18px;
    word-break: break-all;
  }
`;

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-top: 8px;
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
  background: #15803d;
  border-color: #15803d;
  color: ${colors.white};

  &:hover {
    filter: brightness(1.1);
  }
`;

const SocialButton = styled.a<{ $bg: string }>`
  ${ctaBase}
  background: ${(p) => p.$bg};
  border-color: ${(p) => p.$bg};
  color: ${colors.white};

  &:hover {
    filter: brightness(1.15);
  }
`;

export default function ContactMe() {
  return (
    <Card id="contact">
      <Eyebrow>Get in Touch</Eyebrow>
      <Heading>Let&apos;s build something, or just say hi.</Heading>
      <Lead>
        Whether it&apos;s a project, a role, or just a good problem to think about, I&apos;m
        happy to talk.
      </Lead>
      <EmailLink href={`mailto:${EMAIL}`}>{EMAIL}</EmailLink>
      <ActionRow>
        <PrimaryButton href={CAL_URL} target="_blank" rel="noreferrer">
          <CalendarIcon size={18} />
          Book a call
        </PrimaryButton>
        <SocialButton
          href="https://github.com/ChinmayKarnik"
          target="_blank"
          rel="noreferrer"
          $bg="#181717"
        >
          <GithubIcon size={18} />
          GitHub
        </SocialButton>
        <SocialButton
          href="https://www.linkedin.com/in/chinmay-karnik-25a08615b"
          target="_blank"
          rel="noreferrer"
          $bg="#0a66c2"
        >
          <LinkedinIcon size={18} />
          LinkedIn
        </SocialButton>
      </ActionRow>
    </Card>
  );
}
