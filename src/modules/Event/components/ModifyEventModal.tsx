import React, { useState } from "react";
import { League } from "../../../model/league";
import { LeagueEvent } from "../../../model/leagueEvent";
import {
  Modal,
  Button,
  Input,
  ModalButtonGroup
} from "../../../components";
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
      <Input
          id={"eventName"}
          label={"Event name"}
          type="text"
          onChange={(e: any) =>
            setEvent({ ...event, eventName: e.target.value })
          }
          placeholder={event.eventName ? event.eventName : "Event name"}
        ></Input>
        <Input
          id={"homeTeam"}
          label={"Home team"}
          type="text"
          onChange={(e: any) =>
            setEvent({ ...event, homeTeam: e.target.value })
          }
          placeholder={event.homeTeam ? event.homeTeam : "Home team name"}
        ></Input>
        <Input
          id={"awayTeam"}
          label={"Away team"}
          type="text"
          onChange={(e: any) =>
            setEvent({ ...event, awayTeam: e.target.value })
          }
          placeholder={event.awayTeam ? event.awayTeam : "Away team name"}
        ></Input>
        <Input
          id={"homeTeam"}
          label={"Home team"}
          type="number"
          onChange={(e: any) =>
            setEvent({ ...event, homeScore: e.target.value })
          }
          placeholder={
            event.homeScore ? event.homeScore.toString() : "event name"
          }
        ></Input>
        <Input
          id={"awayTeam"}
          label={"Away Score"}
          type="number"
          onChange={(e: any) =>
            setEvent({ ...event, awayScore: e.target.value })
          }
          placeholder={
            event.awayScore ? event.awayScore.toString() : "event name"
          }
        ></Input>
        <Input
          id={"timestamp"}
          label={"Timestamp"}
          type="number"
          onChange={(e: any) =>
            setEvent({ ...event, timestampCreated: e.target.value })
          }
          placeholder={
            event.timestampCreated
              ? event.timestampCreated.toString()
              : "event name"
          }
        ></Input>
        <ModalButtonGroup>
          <Button onClick={patchEvent}>
            <span>Patch</span>
          </Button>
          <Button onClick={cancelEdit}>
            <span>Cancel</span>
          </Button>
        </ModalButtonGroup>
    </Modal>
  );
}
