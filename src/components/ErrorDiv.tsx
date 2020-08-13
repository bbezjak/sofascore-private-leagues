import React from "react";
import styled from "styled-components";
import { Stylable } from "../utils";

interface IErrorDivProps extends Stylable{
  error: string | undefined;
}

export function ErrorDiv({ error, style }: IErrorDivProps) {
  return (
    <Div className={!error ? "no-display" : ""} style = {style}>
      <p>{error}</p>
    </Div>
  );
}

const Div = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: rgba(255, 99, 71);
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: inherit;

  p {
    margin: 0 5px;
  }
`;
