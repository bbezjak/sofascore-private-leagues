import React, { useState } from "react";
import { LeagueEvent } from "../../../model/leagueEvent";
import { Modal, Button, Input } from "../../../components";
import styled from "styled-components";
import { League } from "../../../model/league";

type Props = {
  league: League;
  cancelEdit: () => void;
};

export function CreateEventModal({ league, cancelEdit }: Props) {
  const [event, setEvent] = useState<Partial<LeagueEvent>>();

  function postEvent() {
    // TODO api call na backend
  }

  return (
    <Modal>
      <FlexContainer>
        <label>Event name</label>
        <Input
          type="text"
          onChange={(e: any) =>
            setEvent({ ...event, name: e.target.value })
          }
          placeholder="ex. Game day"
        ></Input>
        <label>Home team</label>
        <Input
          type="text"
          onChange={(e: any) =>
            setEvent({ ...event, homeTeam: e.target.value })
          }
          placeholder="ex. LA Lakers"
        ></Input>

        <label>Away team</label>
        <Input
          type="text"
          onChange={(e: any) =>
            setEvent({ ...event, awayTeam: e.target.value })
          }
          placeholder="ex. Boston Celtics"
        ></Input>

      </FlexContainer>
      <Button onClick={postEvent}>
        <span>Create</span>
      </Button>
      <Button onClick={cancelEdit}>
        <span>Cancel</span>
      </Button>
    </Modal>
  );
}

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
