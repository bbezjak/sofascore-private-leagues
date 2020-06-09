import React from "react";
import "./Input.css";

export interface IInputProps {
  label: string,
  type: string,
  onChange: Function,
  placeholder: string
  displayError: string | boolean,
  errorMessage: string
}

export function Input(props: IInputProps) {
  const error = props.displayError ? "" : "no-display";

  return (
    <>
      <label className="input-label">{props.label}</label>
      <input
        className="login-element"
        type={props.type}
        onChange={(e) => props.onChange(e)}
        placeholder={props.placeholder}
      ></input>
      <span className={`error-mesagge ${error}`}>{props.errorMessage}</span>
    </>
  );
}
export default React.memo(Input);
