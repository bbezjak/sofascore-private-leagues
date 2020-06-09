import React, { useState, useEffect } from "react";
import { Modal, Button, Input, ErrorDiv } from "../../../components";
import styled from "styled-components";
import { LeagueEvent } from "../../../model/leagueEvent";
import { League } from "../../../model/league";
import { patchByLeagueId, getLeagueById } from "../../../api";
import { useSelector, useDispatch } from "react-redux";
import { ReduxState } from "../../../store";

const leagueTeamplate: Partial<League> = {}

type Props = {
    league: League,
    onSuccess: (league: Partial<League>) => void,
    cancelEdit: () => void
}

export function LeagueEditModal({league, onSuccess, cancelEdit}: Props) {
    const user = useSelector( (state: ReduxState) => state.user);

    const [newLeague, setNewLeague] = useState(leagueTeamplate);
    const [error, setError] = useState("");

    async function updateLeague() {
      await patchByLeagueId(league.leagueId, newLeague, user.token)
      .then(() => {
        onSuccess(newLeague)
        cancelEdit();
      })
      .catch(err => {
        setError(err.data)
      })
    }
  
    return (
      <Modal>
        <FlexContainer>
          <label>League name</label>
          <Input
            type="text"
            onChange={(e: any) => setNewLeague({ ...newLeague, name: e.target.value })}
            placeholder={league.name !== undefined ? league.name : "league name"}
          ></Input>
          <label>League description</label>
          <Input
            type="text"
            onChange={(e: any) => setNewLeague({ ...newLeague, description: e.target.value })}
            placeholder={league.description !== undefined ? league.description : "league description"}
          ></Input>
        </FlexContainer>
        <Button onClick={updateLeague}>
          <span>Update</span>
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