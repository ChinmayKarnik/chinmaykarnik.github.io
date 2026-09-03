"use client";

import styled from "styled-components";
import Container from "./Container";
import ArticleList from "./ArticleList";
import CompetitiveProgramming from "./CompetitiveProgramming";
import Writing from "./Writing";
import ShowMoreButton from "./ShowMoreButton";

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
    <Container>
      <Grid>
        <ArticleList />
        <RightColumn>
          <CompetitiveProgramming />
          <Writing />
        </RightColumn>
      </Grid>
      <ShowMoreButton />
    </Container>
  );
}
