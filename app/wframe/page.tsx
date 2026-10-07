"use client";

import styled from "styled-components";

// Pure information-architecture sketch — no color, no type system, no icons.
// Box size = relative visual weight. This page is scaffolding for a layout
// discussion, not a component to ship; it isn't linked from the real site.

const Page = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 24px 96px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-family: system-ui, sans-serif;
  color: #111;
`;

const Note = styled.p`
  font-size: 13px;
  color: #666;
  margin: 0 0 8px;
`;

const Box = styled.div<{ $weight: "high" | "med" | "low"; $minHeight?: number }>`
  border: 2px dashed #333;
  background: ${({ $weight }) =>
    $weight === "high" ? "#d8d8d8" : $weight === "med" ? "#ececec" : "#f7f7f7"};
  padding: 16px;
  min-height: ${({ $minHeight }) => $minHeight ?? 60}px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.div`
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

const Weight = styled.span`
  font-size: 10px;
  font-weight: 700;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 1px 6px;
  white-space: nowrap;
`;

const Body = styled.div`
  font-size: 13px;
  color: #333;
  line-height: 1.5;
`;

const Row = styled.div<{ $cols?: string }>`
  display: grid;
  grid-template-columns: ${({ $cols }) => $cols ?? "1fr"};
  gap: 16px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const PhotoFill = styled.div`
  flex: 1;
  border: 1px dashed #999;
  background: repeating-linear-gradient(45deg, #e0e0e0, #e0e0e0 10px, #ececec 10px, #ececec 20px);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  color: #777;
`;

function PhotoSection({
  label,
  weight,
  minHeight,
}: {
  label: string;
  weight: "high" | "med" | "low";
  minHeight?: number;
}) {
  return (
    <Box $weight={weight} $minHeight={minHeight}>
      <Label>
        <span>{label}</span>
        <Weight>ATTENTION: {weight.toUpperCase()}</Weight>
      </Label>
      <PhotoFill>Profile Photo</PhotoFill>
    </Box>
  );
}

function Section({
  label,
  weight,
  minHeight,
  children,
}: {
  label: string;
  weight: "high" | "med" | "low";
  minHeight?: number;
  children: React.ReactNode;
}) {
  return (
    <Box $weight={weight} $minHeight={minHeight}>
      <Label>
        <span>{label}</span>
        <Weight>ATTENTION: {weight.toUpperCase()}</Weight>
      </Label>
      <Body>{children}</Body>
    </Box>
  );
}

export default function Wireframe() {
  return (
    <Page>
      <Note>
        /wframe — structure only, no styling. Box size/shade = proposed attention weight, not
        final visuals.
      </Note>

      <Row $cols="auto 1fr auto">
        <Section label="Logo" weight="low">
          Chinmay Karnik
        </Section>
        <Section label="Nav" weight="low">
          Projects · Competitive Programming · Writing · Contact
        </Section>
        <Section label="Icon links (repurposed)" weight="low">
          GitHub · Résumé · Email — replaces Search/Sound/RSS, each goes somewhere real
        </Section>
      </Row>

      <Row $cols="1fr 240px">
        <Section label="Hero — Intro" weight="med" minHeight={160}>
          Name + one-line value prop (what you actually do) + a single primary CTA (e.g. &quot;See
          my work&quot; → scrolls to Featured Project). Currently empty — just background art, no
          text at all.
        </Section>
        <PhotoSection label="Hero — Photo" weight="med" minHeight={160} />
      </Row>

      <Section label="Featured Project — FitForge" weight="high" minHeight={280}>
        The one thing every visitor should see. Larger card than anything else on the page:
        title, one-paragraph description, 2–3 concrete highlights (e.g. tech stack, a metric,
        what problem it solves), primary links (Live Demo, GitHub) rendered as visible
        buttons, not buried text links. Possibly a product screenshot — this is the one place a
        screenshot earns its space.
      </Section>

      <Row $cols="1fr 1fr">
        <Section label="Other Projects — ChessTourney" weight="low" minHeight={90}>
          Title, one-line description, &quot;Show More&quot; link. Same minimal treatment as today.
        </Section>
        <Section label="Other Projects — Tooltip" weight="low" minHeight={90}>
          Title, one-line description, &quot;Show More&quot; link. Same minimal treatment as today.
        </Section>
      </Row>

      <Row $cols="1fr 1fr">
        <Section label="Competitive Programming" weight="med" minHeight={160}>
          Codeforces / CodeChef / ICPC stat rows — supporting credibility signal, not the main
          draw.
        </Section>
        <Section label="Writing" weight="med" minHeight={160}>
          dev.to posts list, arrow + hover styling already matched to reference. Supporting
          content.
        </Section>
      </Row>

      <Section label="Footer" weight="low" minHeight={80}>
        Social links, contact, copyright. Utility only.
      </Section>
    </Page>
  );
}
