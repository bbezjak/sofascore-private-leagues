import React from "react";
import { Children } from "../utils";
import styled from "styled-components";
import { Theme } from "../theme";

export function PageTitle({ children }: Children) {
  return <Title>{children}</Title>;
}

const Title = styled.h2<{theme : Theme}>`
  margin: 40px 0;
  color: ${(props) => props.theme.tertiraryColor}

`;
