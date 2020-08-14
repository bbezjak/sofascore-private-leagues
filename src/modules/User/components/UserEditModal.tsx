import React, { useState } from "react";
import {
  Modal,
  Button,
  Input,
  ErrorDiv,
  ModalButtonGroup,
} from "../../../components";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { ReduxState } from "../../../store";
import { patchMe } from "../../../api";
import { User, updateUser } from "../../../model/user";

type Props = {
  cancelEdit: () => void;
};

const initialState: Partial<User> = {};

export function UserEditModal({ cancelEdit }: Props) {
  const user = useSelector((state: ReduxState) => state.user);
  const dispatch = useDispatch();
  const [updatedUser, setUpdatedUser] = useState(initialState);
  const [error, setError] = useState("");

  async function patchUser() {
    await patchMe(user.token, updatedUser)
      .then(() => {
        ;
        //const getUserName = getKeyValue<keyof Partial<User>, Partial<User>>("username")(updatedUser);
        dispatch(updateUser(user, updatedUser));
        cancelEdit();
      })
      .catch((err) => {
        setError(err.data);
      });
  }

  return (
    <Modal>
        <Input
          id={"ModalUsername"}
          label={"Username"}
          type="text"
          onChange={(e: any) =>
            setUpdatedUser({ ...updatedUser, username: e.target.value })
          }
          placeholder={user.username ? user.username : "new username"}
        ></Input>
        <ModalButtonGroup>
          <Button onClick={patchUser}>
            <span>Patch</span>
          </Button>
          <Button onClick={cancelEdit}>
            <span>Cancel</span>
          </Button>
        </ModalButtonGroup>
      {error && <ErrorDiv error={error} />}
    </Modal>
  );
}
