import React from "react";
import styled from "styled-components";
import { Children } from "../utils";
import ReactDOM from "react-dom";
import { Theme } from "../theme";

interface Props extends Children {}

// TODO upgrade to Portal
// https://reactjs.org/docs/portals.html
// https://codepen.io/gaearon/pen/jGBWpE
// https://www.youtube.com/watch?v=538Zu3Y0xTA
// https://codeburst.io/reacts-portals-in-3-minutes-9b2efb74e9a9
// https://stackoverflow.com/questions/54059078/how-to-blur-disable-parent-component-when-child-page-popup-page-is-opened

export function Modal({ children }: Props) {
  const modalRoot: HTMLElement =
    document.getElementById("root-modal") ||
    document.createElement("root-modal");

  const toRender = <ModalDiv>{children}</ModalDiv>;

  return ReactDOM.createPortal(toRender, modalRoot);
}

const ModalDiv = styled.div<{ theme: Theme }>`
  position: fixed;
  border-radius: 5px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 275px;
  max-width: 400px;
  width: 50%;
  min-height: 40%;
  background-color: ${(props) => props.theme.primaryColor};
  padding: 5px;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ModalButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

  button {
    flex: 1;
  }

  @media only screen and (max-width: 600px) {
    button {
      flex: 100%;
    }
  }
`;
