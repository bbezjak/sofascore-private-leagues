import React from "react";
import styled from "styled-components";
import { Stylable } from "../utils";
import { Theme } from "../theme";

interface IProps extends Stylable {
  id: string;
  type: string;
  label?: string;
  onChange: (e: any) => void;
  placeholder?: string;
  inLine?: boolean;
}

export function Input({
  id,
  type,
  label,
  placeholder,
  onChange,
  inLine = false,
}: IProps) {
  return (
    <InputFlexbox inline={inLine}>
      {label !== undefined && <Label htmlFor={id}>{label}</Label>}
      <StyledInput
        id={id}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      ></StyledInput>
    </InputFlexbox>
  );
}

const Label = styled.label`
  align-self: flex-start;
  color: ${(props) => props.theme.secondaryColor};
`;

const InputFlexbox = styled.div<{ inline: boolean }>`
  display: flex;
  ${(props) => !props.inline && `flex-direction: column;`}
`;

const StyledInput = styled.input<{ theme: Theme }>`
  height: 30px;
  color: ${(props) => props.theme.secondaryColor};
  background-color: ${(props) => props.theme.primaryColor};
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.tertiraryColor};

  :focus {
    color: ${(props) => props.theme.secondaryColor};
    background-color: ${(props) => props.theme.primaryColor};
    outline: 1px solid ${(props) => props.theme.tertiraryColor};
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(props) => props.theme.tertiraryColor};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${(props) => props.theme.tertiraryColor};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${(props) => props.theme.tertiraryColor};
  }

  :-webkit-autofill{
    background-color: ${(props) => props.theme.primaryColor};
  }
`;
