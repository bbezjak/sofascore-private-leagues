import React, { useState } from "react";
import { League } from "../../../model/league";
import { LeagueEvent } from "../../../model/leagueEvent";
import { Modal, Button, Input } from "../../../components";
import styled from "styled-components";

type Props = {
  oldEvent: LeagueEvent;
  cancelEdit: () => void;
};

export function ModifyEventModal({ oldEvent, cancelEdit }: Props) {
  const [event, setEvent] = useState(oldEvent);

  function patchEvent() {
    // TODO api call na backend
  }

  return (
    <Modal>
      <FlexContainer>
        <label>Event name</label>
        <Input
          type="text"
          onChange={(e: any) =>
            setEvent({ ...event, eventName: e.target.value })
          }
          placeholder={event.eventName ? event.eventName : "Event name"}
        ></Input>
        <label>Home team</label>
        <Input
          type="text"
          onChange={(e: any) =>
            setEvent({ ...event, homeTeam: e.target.value })
          }
          placeholder={event.homeTeam ? event.homeTeam : "Home team name"}
        ></Input>

        <label>Away team</label>
        <Input
          type="text"
          onChange={(e: any) =>
            setEvent({ ...event, awayTeam: e.target.value })
          }
          placeholder={event.awayTeam ? event.awayTeam : "Away team name"}
        ></Input>

        <label>Home score</label>
        <Input
          type="number"
          onChange={(e: any) =>
            setEvent({ ...event, homeScore: e.target.value })
          }
          placeholder={event.homeScore ? event.homeScore.toString() : "event name"}
        ></Input>

        <label>Away score</label>
        <Input
          type="number"
          onChange={(e: any) =>
            setEvent({ ...event, awayScore: e.target.value })
          }
          placeholder={event.awayScore ? event.awayScore.toString() : "event name"}
        ></Input>

        <label>Timestamp</label>
        <Input
          type="number"
          onChange={(e: any) =>
            setEvent({ ...event, timestampCreated: e.target.value })
          }
          placeholder={event.timestampCreated ? event.timestampCreated.toString() : "event name"}
        ></Input>

        {/* <label>Home players</label>
         <Input
          type="string"
          onChange={(e: any) =>
            setEvent({ ...event, homeTeam: e.target.value })
          }
          placeholder={event.homePla ? event.name : "event name"}
        ></Input> */}

        {/* <label>Away players</label>
        <Input
          type="string"
          onChange={(e: any) =>
            setEvent({ ...event, homeTeam: e.target.value })
          }
          placeholder={event.homeTeam ? event.name : "event name"}
        ></Input> */}

      </FlexContainer>
      <Button onClick={patchEvent}>
        <span>Patch</span>
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
