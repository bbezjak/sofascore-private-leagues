import React, { useState } from "react";
import { LeagueEvent } from "../../../model/leagueEvent";
import { Modal, Button, Input } from "../../../components";
import styled from "styled-components";
import { League } from "../../../model/league";
import { postEventsByLeagueId } from "../../../api";
import { useSelector } from "react-redux";
import { ReduxState } from "../../../store";

type Props = {
  league: League;
  onSuccess: (event :LeagueEvent) => void,
  cancelEdit: () => void;
};

export function CreateEventModal({ league, onSuccess, cancelEdit }: Props) {
  const user = useSelector( (state: ReduxState) => state.user);
  const [event, setEvent] = useState<Partial<LeagueEvent>>({});

  function postEvent() {
    debugger;
    const requestBody: Partial<LeagueEvent> = event;
    requestBody.leagueId = league.leagueId;
    requestBody.admins = league.admins;
    postEventsByLeagueId(league.leagueId, user.token, requestBody)
      .then( (res) => {
        const newEvent: LeagueEvent = {
          eventId: res.data,
          leagueId: league.leagueId,
          ...event,
          admins: requestBody.admins
        }
        debugger;
        onSuccess(newEvent);
        cancelEdit();
      }).catch(err => {
        debugger
      })
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
          placeholder="ex. NBA Finals game 7"
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
