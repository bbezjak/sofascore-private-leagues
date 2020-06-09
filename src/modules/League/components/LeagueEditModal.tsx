import React, { useState } from "react";
import { Modal, Button, Input } from "../../../components";
import styled from "styled-components";
import { LeagueEvent } from "../../../model/leagueEvent";

const eventTeamplate: Partial<LeagueEvent> = {
  name: "",
  homeTeam: "",
  awayTeam: "",
  homeScore: 0,
  awayScore: 0,
  timestampCreated: "",
  homeTeamPlayers: [],
  awayTeamPlayers: []
}

type Props = {
    cancelCreating: () => void
}

export function LeagueEditModal({cancelCreating}: Props) {
    const [event, setEvent] = useState(eventTeamplate);

    function createEvent() {
      // TODO api call na backend
    }
  
    return (
      <Modal>
        <FlexContainer>
          <label>Event name</label>
          <Input
            type="text"
            onChange={(e: any) => setEvent({ ...event, name: e.target.value })}
            placeholder="ex. League 1"
          ></Input>
          <label>Home Team</label>
          <Input
            type="text"
            onChange={(e: any) => setEvent({ ...event, homeTeam: e.target.value })}
            placeholder="ex. Team A"
          ></Input>
           <label>Away team</label>
          <Input
            type="text"
            onChange={(e: any) => setEvent({ ...event, awayTeam: e.target.value })}
            placeholder="ex. Team B"
          ></Input>
           <label>Home Score</label>
          <Input
            type="text"
            onChange={(e: any) => setEvent({ ...event, homeScore: e.target.value })}
            placeholder="ex. 2"
          ></Input>
           <label>Away Score</label>
          <Input
            type="text"
            onChange={(e: any) => setEvent({ ...event, awayScore: e.target.value })}
            placeholder="ex. 0"
          ></Input>
        </FlexContainer>
        <Button onClick={createEvent}>
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