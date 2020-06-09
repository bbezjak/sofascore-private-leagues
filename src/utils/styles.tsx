import styled, { css, createGlobalStyle } from "styled-components";
import * as kobe_black from "./backgroundPictures/kobe_usa_black.jpg";
import * as kobe_take_flight from "./backgroundPictures/kobe_take_flight.jpg";

export const PRIMARY_COLOR = "#ab47bc";
export const PRIMARY_COLOR_LIGHT = "#df78ef";
export const PRIMARY_COLOR_DARK = "#790e8b";

export const BACKGROUND_COLOR = "#121212";
export const SURFACE_BACKGROUND_COLOR = "rgba(255, 255, 255, 0.1)";
export const TEXT_COLOR = "#121212";

export const primaryColor = css`
  color: ${PRIMARY_COLOR};
`;

export const backgroundColor = css`
  background-color: ${BACKGROUND_COLOR};
`;

export const surfaceBackgroundColor = css`
  background-color: ${SURFACE_BACKGROUND_COLOR};
`;

export const textColor = css`
  color: ${TEXT_COLOR};
`;

export const Fade = styled.div<{ visible?: boolean }>`
  transition: opacity 0.2s ease-in-out;
  opacity: ${(props) => (props.visible ? 1 : 0)};

  ${(props) => !props.visible && `pointer-events: none;`}
`;

// Top most element of every page, used for creating default page style defined in standard CRA App.tsx
// This div is not exact replica of CRA`s App.tsx styles
export const CraLikeMain = styled.div`
  text-align: center;
  background-image: url(${kobe_black});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  .no-display {
    visibility: hidden;
  }
`;

export const Card = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: gold;
  border-radius: 15px;
  margin: 5px auto;
  padding: 5px;

  :hover {
    background-color: purple;
  }
`;

export const FlexboxList = styled.div`
  min-height: fit-content;
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  only screen and (min-width:769px) {
    width: 60%;
  }
`;

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    user-select: none;
    ${backgroundColor};
    ${textColor};
    margin: 0;
  }

  a {
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
    ${primaryColor};

    &:hover {
      text-decoration: none;
      color: ${PRIMARY_COLOR_LIGHT};
    }

    &:visited {
      text-decoration: none
    }
  }
`;
