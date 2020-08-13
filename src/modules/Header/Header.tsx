import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../store";
import {  Theme } from "../../theme";

export function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state: ReduxState) => state.user);

  return (
    <StyledHeader>
      <FlexContainer>
        <div>
          <NavLink to="/">HOME</NavLink>
        </div>
        <div>
          <NavLink to={`/user/me`}>{user.username}</NavLink>
        </div>
      </FlexContainer>
    </StyledHeader>
  );
}

const StyledHeader = styled.header<{theme : Theme}>`
  position: absolute;
  top: 0;
  width: 100%;

  a {
    margin: 0 5px;
    text-transform: initial;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.primaryColor}
`;
