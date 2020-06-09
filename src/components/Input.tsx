import React from "react";
import styled from "styled-components";

type Props = {
  type: string;
  label?: string;
  onChange: (e: any) => void,
  placeholder: string
};

export function Input({type, label, placeholder, onChange}: Props) {
  return (
    <>
      {label !== undefined && 
        <label>{label}</label>
      }
      <StyledInput
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      ></StyledInput>
    </>
  );
}

const StyledInput = styled.input`
    outline: none;
`;
