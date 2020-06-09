import React, { useEffect } from "react";
import styled from "styled-components";
import { Children } from "../utils";
import { useDispatch } from "react-redux";
import ReactDOM from "react-dom";

type Props = {
    error: string
}

// TODO animairati odlazak s ekrana
// https://github.com/reactjs/react-transition-group/tree/v1-stable

export function ErrorModal({ error }: Props) {
  const modalRoot: HTMLElement =
    document.getElementById("error-modal") ||
    document.createElement("error-modal");

   useEffect(() => {
    setTimeout(() => {
        const modalElem = document.getElementById("error-modal");
        if(modalElem !== null) {
            setTimeout(()=>modalElem.remove(), 5000)
        }
    })
   })

  const toRender = (
    <ErrorDiv>
      <p>{error}</p>
    </ErrorDiv>
  );

  return ReactDOM.createPortal(toRender, modalRoot);
}

const ErrorDiv = styled.div`
  height:100px;
  width: 200px;
  position: fixed;
  background: red;
  color: white;
  border-radius: 5px;
  bottom: 0;
  right: 0;
`;
