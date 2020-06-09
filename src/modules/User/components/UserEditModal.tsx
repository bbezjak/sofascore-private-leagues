import React, { useState } from "react";
import { Modal, Button, Input, ErrorDiv } from "../../../components";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { ReduxState } from "../../../store";
import { patchMe } from "../../../api";
import { User } from "../../../model/user";

type Props = {
  cancelEdit: () => void;
};

const initialState: Partial<User> = {
  username: ""
}

export function UserEditModal({ cancelEdit }: Props) {
  const user = useSelector((state: ReduxState) => state.user);
  const [updatedUser, setUpdatedUser] = useState(initialState);
  const [error, setError] = useState("");

  const getKeyValue = <U extends keyof T, T extends object>(key: U) => (obj: T) => obj[key];

  async function patchUser() {
    await patchMe(user.token, updatedUser)
      .then(() => {
        const getUserName = getKeyValue<keyof Partial<User>, Partial<User>>("username")(updatedUser);
        console.log()
      })
      .catch(err => {
        setError("banana")
      })
  }

  return (
    <Modal>
      <FlexContainer>
        <label>Username</label>
        <Input
          type="text"
          onChange={(e: any) => setUpdatedUser({ ...updatedUser, username: e.target.value })}
          placeholder={user.username ? user.username : "new username"}
        ></Input>
      </FlexContainer>
      <Button onClick={patchUser}>
        <span>Patch</span>
      </Button>
      <Button onClick={cancelEdit}>
        <span>Cancel</span>
      </Button>
      {error && <ErrorDiv error={error}/>}
    </Modal>
  );
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
