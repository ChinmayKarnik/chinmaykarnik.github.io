"use client";

import styled from "styled-components";

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;

  @media (max-width: 640px) {
    padding: 0 16px;
  }
`;

export default Container;
