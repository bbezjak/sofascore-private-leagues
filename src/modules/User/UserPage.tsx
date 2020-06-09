import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReduxState } from "../../store";
import { CraLikeMain } from "../../utils";
import { Header } from "../Header";
import { getMe, deleteMe } from "../../api";
import { UserEditModal } from "./components/UserEditModal";
import { Button, PageTitle } from "../../components";
import { cleanUser } from "../../model/user";

export function UserPage() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: ReduxState) => state);
  const [update, setUpdate] = useState(false);

  useEffect((token = user.token) => {
    if (token !== undefined) {
      getMe(token)
        .then((res) => {
          debugger;
        })
        .catch((err) => {
          debugger;
        });
    }
  }, [user.token]);

  function logout() {
    dispatch(cleanUser())
  }

  async function deleteCurrentUser() {
    await deleteMe(user.token)
      .then(() => dispatch(cleanUser()))
  }

  return (
    <>
      <Header />
      <CraLikeMain>
      {update && <UserEditModal cancelEdit={() => setUpdate(false)} />}
      <div>
        <PageTitle>My Profile</PageTitle>
        <Button onClick={() => setUpdate(true)}>Update my data</Button>
        <Button onClick={logout}>Logout</Button>
        <Button onClick={deleteCurrentUser}>Delete Me</Button>
        <p>My Username: {user.username}</p>
      </div>
    </CraLikeMain>
    </>
  );
}
