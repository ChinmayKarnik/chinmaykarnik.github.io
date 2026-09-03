"use client";

import styled from "styled-components";
import { colors } from "@/lib/theme";
import Eyebrow from "./Eyebrow";

type Article = {
  title: string;
  subtitle?: string;
  description: string;
};

const ARTICLES: Article[] = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    title: "Consectetur Adipiscing Elit",
    subtitle: "Sed do eiusmod tempor incididunt ut labore",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    title: "Ut Labore Et Dolore Magna",
    description:
      "Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    title: "Excepteur Sint Occaecat",
    subtitle: "Cupidatat non proident sunt in culpa",
    description:
      "Totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.",
  },
];

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = styled.article`
  padding: 40px 0;
  border-bottom: 1px solid ${colors.hillLight};

  &:first-child {
    padding-top: 0;
  }
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
  line-height: 33px;
  margin: 0 0 6px;
  color: ${colors.text};
`;

const Subtitle = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: ${colors.textMuted};
  margin: 0 0 12px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.text};
  margin: 0 0 16px;
`;

const ReadMore = styled.a`
  font-weight: 700;
  font-size: 16px;
  color: ${colors.text};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function ArticleList() {
  return (
    <section>
      <Eyebrow>Lorem Ipsum Dolor</Eyebrow>
      <List>
        {ARTICLES.map((article) => (
          <Card key={article.title}>
            <Title>{article.title}</Title>
            {article.subtitle && <Subtitle>{article.subtitle}</Subtitle>}
            <Description>{article.description}</Description>
            <ReadMore href="#">Read more</ReadMore>
          </Card>
        ))}
      </List>
    </section>
  );
}
