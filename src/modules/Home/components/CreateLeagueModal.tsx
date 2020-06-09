import React, { useState } from "react";
import { Modal, Button, Input } from "../../../components";
import styled from "styled-components";
import { League } from "../../../model/league";
import { postLeagues } from "../../../api/leagues/postLeagues";
import { useSelector } from "react-redux";
import { ReduxState } from "../../../store";

const leagueTemplate: Partial<League> = {
  name: "",
  description: "",
};

type Props = {
  onSuccess: (league: League) => void,
  cancelCreating: () => void;
};

export function CreateLeagueModal({onSuccess, cancelCreating }: Props) {
  const [league, setLeague] = useState(leagueTemplate);
  const user = useSelector((state: ReduxState) => state.user)

  async function createLeague() {
    await postLeagues(league, user.token)
      .then((res) => {
        const newLeague: League = {
          leagueId: res.data,
          name: league.name,
          description: league.description
        }
        onSuccess(newLeague);
        cancelCreating();
      })
      .catch((res) => {
        debugger;
      })
  }

  return (
    <Modal>
      <FlexContainer>
        <label>League name</label>
        <Input
          type="text"
          onChange={(e: any) => setLeague({ ...league, name: e.target.value })}
          placeholder="ex. League 1"
        ></Input>
        <label>League data</label>
        <Input
          type="text"
          onChange={(e: any) => setLeague({ ...league, description: e.target.value })}
          placeholder="ex. French 1. football league"
        ></Input>
      </FlexContainer>
      <Button onClick={createLeague}>
        <span>Create</span>
      </Button>
      <Button onClick={cancelCreating}>
        <span>Cancel</span>
      </Button>
    </Modal>
  );
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
