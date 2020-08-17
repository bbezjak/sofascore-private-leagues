import styled, { css, createGlobalStyle } from "styled-components";
import { Theme } from "../theme/theme";

export const Fade = styled.div<{ visible?: boolean }>`
  transition: opacity 0.2s ease-in-out;
  opacity: ${(props) => (props.visible ? 1 : 0)};

  ${(props) => !props.visible && `pointer-events: none;`}
`;

// Top most element of every page, used for creating default page style defined in standard CRA App.tsx
// This div is not exact replica of CRA`s App.tsx styles
export const CraLikeMain = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;

  .no-display {
    visibility: hidden;
  }
`;

export const Card = styled.div<{ theme: Theme }>`
  min-width: 270px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 15px;
  margin: 5px auto;
  padding: 5px;

  :hover {
    background-color: ${(props) => props.theme.tertiraryColor};
  }
`;

export const FlexboxList = styled("div")<{ column?: boolean }>`
  min-height: fit-content;
  display: flex;
  ${(props) => props.column && `flex-direction: column`};
  justify-content: space-around;
  flex-wrap: wrap;
  margin: auto;

  only screen and (min-width:769px) {
    width: 60%;
  }
`;

// https://spectrum.chat/styled-components/general/i-cant-use-my-theme-in-createglobalstyle-function-styled-components-v4-react-v16-6-3~0978b404-ab71-45c9-8f75-0862abde4eb5
export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  body {
    background-image: url(${({ theme }) => theme.backgroundImage});
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
    font-family: 'Lato', sans-serif;
    user-select: none;
    margin: 0;
    color: ${({ theme }) => theme.secondaryColor};
  }

  a {
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.secondaryColor};

    &:hover {
      text-decoration: none;
      color: ${({ theme }) => theme.tertiraryColor};
    }

    &:visited {
      text-decoration: none
    }
  }
`;
