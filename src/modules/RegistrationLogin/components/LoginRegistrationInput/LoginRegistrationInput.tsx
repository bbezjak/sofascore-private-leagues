import React from "react";
import { Input } from "../../../../components";
import styled from "styled-components";
import { Theme } from "../../../../theme";

interface IProps {
  label: string;
  type: string;
  onChange: Function;
  placeholder: string;
  displayError: string | boolean;
  errorMessage: string;
}

export const LoginRegistrationInput = ({
  type,
  label,
  placeholder,
  onChange,
  displayError,
  errorMessage,
}: IProps) => {
  const error = displayError ? "" : "no-display";

  return (
    <StyledDiv>
      <Input
        id={label + type}
        type={type}
        label={label}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
      />
      <ErrorMessage className={`error-mesagge ${error}`}>{errorMessage}</ErrorMessage>
    </StyledDiv>
  );
};

const StyledDiv = styled.span`
  margin-bottom: 10px;
`

const ErrorMessage = styled.span<{ theme: Theme }>`
  color: ${(props) => props.theme.tertiraryColor};
  text-align: start;
  font-size: medium;
`