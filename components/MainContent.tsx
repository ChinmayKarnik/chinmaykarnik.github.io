"use client";

import styled from "styled-components";
import Container from "./Container";
import ArticleList from "./ArticleList";
import CompetitiveProgramming from "./CompetitiveProgramming";
import Writing from "./Writing";
import ShowMoreButton from "./ShowMoreButton";

// Josh doesn't stack his hero and main-content section edge-to-edge — the content
// is pulled up over the hero's tail via negative margin. We replicate that mechanism
// (not his raw pixel values, which are tuned to his own hero/rainbow composition):
// 84px is the amount that lands our "Projects" eyebrow at the same vertical position
// Josh's "Articles and Tutorials" sits at (measured at a 1440px viewport). This only
// works because the hero's foreground wave was reshaped to keep clearance above this
// value across the full content width — see the comment on HERO_FOREGROUND_PATH in
// hillPaths.ts. If the hero's height or art changes, re-measure clearance (worst case
// across the content width, not just one sample point) before reusing this constant.
const CONTENT_HERO_OVERLAP = 84;

const ContentContainer = styled(Container)`
  position: relative;
  z-index: 1;
  margin-top: -${CONTENT_HERO_OVERLAP}px;

  @media (max-width: 900px) {
    margin-top: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 96px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-top: 160px;

  @media (max-width: 900px) {
    margin-top: 0;
    gap: 48px;
  }
`;

export default function MainContent() {
  return (
    <ContentContainer>
      <Grid>
        <ArticleList />
        <RightColumn>
          <CompetitiveProgramming />
          <Writing />
        </RightColumn>
      </Grid>
      <ShowMoreButton />
    </ContentContainer>
  );
}
