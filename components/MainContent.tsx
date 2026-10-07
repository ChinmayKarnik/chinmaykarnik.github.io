"use client";

import styled from "styled-components";
import Container from "./Container";
import FeaturedProject from "./FeaturedProject";
import ArticleList from "./ArticleList";
import CompetitiveProgramming from "./CompetitiveProgramming";
import Writing from "./Writing";
import ShowMoreButton from "./ShowMoreButton";

const ContentContainer = styled(Container)`
  position: relative;
  z-index: 1;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 96px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

// Josh's sidebar ("categories") isn't pulled up like his articles column is — it sits
// at its natural grid-row position, while only the articles column ("newest") carries
// its own independent negative margin. The gap this produces between the two columns'
// tops, decoded from his actual grid rule (padding-top: 32px + row-gap: 64px, since the
// 0-height "blocker" row above contributes nothing): 96px. We don't have his 3-row named
// grid or its "blocker" row (unrelated to visible layout), but reproducing the same
// resulting 96px offset here is the correct adaptation, not a guessed value — measured via
// investigate-sidebar-grid-detail.js against the reference site.
const RIGHT_COLUMN_OFFSET = 96;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-top: ${RIGHT_COLUMN_OFFSET}px;

  @media (max-width: 900px) {
    margin-top: 0;
    gap: 48px;
  }
`;

export default function MainContent() {
  return (
    <ContentContainer>
      <FeaturedProject />
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
