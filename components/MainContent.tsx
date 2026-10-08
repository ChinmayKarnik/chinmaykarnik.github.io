"use client";

import styled from "styled-components";
import Container from "./Container";
import FeaturedProject from "./FeaturedProject";
import ArticleList from "./ArticleList";
import CompetitiveProgramming from "./CompetitiveProgramming";
import Writing from "./Writing";

const ContentContainer = styled(Container)`
  position: relative;
  z-index: 1;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media (max-width: 900px) {
    gap: 48px;
  }
`;

export default function MainContent() {
  return (
    <ContentContainer>
      <FeaturedProject />
      <Stack>
        <ArticleList />
        <CompetitiveProgramming />
        <Writing />
      </Stack>
    </ContentContainer>
  );
}
