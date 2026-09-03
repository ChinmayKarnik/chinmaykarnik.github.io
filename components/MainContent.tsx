"use client";

import styled from "styled-components";
import Container from "./Container";
import ArticleList from "./ArticleList";
import Sidebar from "./Sidebar";
import ShowMoreButton from "./ShowMoreButton";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 96px;
  padding-top: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

export default function MainContent() {
  return (
    <Container>
      <Grid>
        <ArticleList />
        <Sidebar />
      </Grid>
      <ShowMoreButton />
    </Container>
  );
}
