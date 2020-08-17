import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReduxState } from "../../store";
import { CraLikeMain } from "../../style";
import { Header } from "../Header";
import { getMe, deleteMe } from "../../api";
import { UserEditModal } from "./components/UserEditModal";
import { Button, PageTitle } from "../../components";
import { cleanUser } from "../../model/user";
import { toggleTheme } from "../../theme";
import styled from "styled-components";

export function UserPage() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: ReduxState) => state);
  const [update, setUpdate] = useState(false);

  useEffect(
    (token = user.token) => {
      if (token !== undefined) {
        getMe(token)
          .then((res) => {
          })
          .catch((err) => {
          });
      }
    },
    [user.token]
  );

  function logout() {
    dispatch(cleanUser());
  }

  async function deleteCurrentUser() {
    await deleteMe(user.token).then(() => dispatch(cleanUser()));
  }

  return (
    <>
      <Header />
      <CraLikeMain>
        {update && <UserEditModal cancelEdit={() => setUpdate(false)} />}
        <div>
          <PageTitle>My Profile</PageTitle>
          <p>My Username: {user.username}</p>
          <ButtonGroup>
          <Button onClick={() => dispatch(toggleTheme())} style={buttonStyle1}>
              Change theme
            </Button>
            <Button onClick={() => setUpdate(true)} style={buttonStyle2}>Update my data</Button>
            <Button onClick={logout} style={buttonStyle2}>Logout</Button>
            <Button onClick={deleteCurrentUser} style={buttonStyle2}>Delete Me</Button>
          </ButtonGroup>
        </div>
      </CraLikeMain>
    </>
  );
}

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const buttonStyle1 = {
  margin: "10px 0"
}

const buttonStyle2 = {
  margin: "5px 0"
}