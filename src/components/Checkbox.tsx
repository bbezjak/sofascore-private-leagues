import React from "react";
import styled from "styled-components";

interface IProps {
  id: string;
  checked: boolean;
  onChange: (e: any) => void;
  label: string;
}

export const Checkbox = ({ id, checked, onChange, label }: IProps) => {
  return (
    <div>
      <StyledInput
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </div>
  );
};

const StyledDiv = styled.input`
    heught: 13px;
`;

const StyledInput = styled.input`
  margin: 0px;
  size: 13px;
`;

const StyledLabel = styled.label`
  margin: auto;
  font-size: medium;
  margin-left: 5px;
`;
