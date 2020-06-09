import React from "react";
import { Children } from "../utils";
import styled from "styled-components";

export function PageTitle({ children }: Children) {
  return <TitleH2>{children}</TitleH2>;
}

const TitleH2 = styled.h2`
  margin: 40px 0;
`;
