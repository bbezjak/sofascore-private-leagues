import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../store";
import { Theme } from "../../theme";

export function Header() {
  const user = useSelector((state: ReduxState) => state.user);

  return (
    <StyledHeader>
      <FlexContainer>
        <div>
          <NavLink to="/">
            <StyledSpan>HOME</StyledSpan>
          </NavLink>
        </div>
        <div>
          <NavLink to={`/user/me`}>
            <StyledSpan>{user.username}</StyledSpan>
          </NavLink>
        </div>
      </FlexContainer>
    </StyledHeader>
  );
}

const StyledSpan = styled.span`
  display: block;
  margin: 5px;
`;

const StyledHeader = styled.header<{ theme: Theme }>`
  position: absolute;
  top: 0;
  width: 100%;

  a {
    margin: 0 5px;
    text-transform: initial;
    display: inline-block;
    margin: auto 0;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.primaryColor};

  height: 30px;
`;
