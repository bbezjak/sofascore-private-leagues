import React, { useState } from "react";
import { League } from "../../model/league";
import { Button, PageTitle } from "../../components";
import { CraLikeMain, FlexboxList } from "../../utils";
import { useParams, useHistory } from "react-router-dom";
import { Header } from "../Header";
import styled from "styled-components";
import { HomeLeagueElem } from "../Home/components/HomeLeagueElem";
import { ModifyEventModal } from "./components/ModifyEventModal";
import { LeagueEvent } from "../../model/leagueEvent";

// https://www.pluralsight.com/guides/react-router-typescript

const testEvent: LeagueEvent = {
  eventId: "aaa1",
  leagueId: "aaa",
  name: "event",
  homeTeam: "team A",
  awayTeam: "team B",
  homeScore: 2,
  awayScore: 0,
  timestampCreated: "5511026",
  timestampUpdated: "5511026",
  homeTeamPlayers: ["Miro", "Pero"],
  awayTeamPlayers: ["Marko", "Zarko"],
};

interface Params {
  id: string;
}

type Props = {
    event: LeagueEvent
}

export function EventPage() {
  const [edit, setEdit] = useState(false);
  let params = useParams<Params>();
  const history = useHistory();

  // TODO dodaj spinner
  // TODO dodaj fetch za event

  function patchEvent() {
    setEdit(true);
  }

  function deleteEvent() {
    // TODO set request to delete league
    history.goBack();
  }

  function addAdmins() {
    // TODO set request to add admins
  }
  
  function addUsers() {
    // TODO set request to add users
  }

  return (
    <>
    <Header />
    <CraLikeMain>
      {edit && (
        <ModifyEventModal oldEvent={testEvent} cancelEdit={() => setEdit(false)} />
      )}
      <PageTitle>Event ID: {params.id}</PageTitle>
      {params.id === "aaa" && ( //kao ako je user admin onda ima prava
        <div>
          <Button onClick={addAdmins}>
            <span>Add Users</span>
          </Button>
          <Button onClick={addUsers}>
            <span>Add Admins</span>
          </Button>
          <Button onClick={patchEvent}>
            <span>Update</span>
          </Button>
          <Button onClick={deleteEvent}>
            <span>Delete</span>
          </Button>
        </div>
      )}

        <div>
          <p>{testEvent.eventId}</p>
          <p>{testEvent.homeTeam}</p>
          <p>{testEvent.awayTeam}</p>
          <p>{testEvent.homeScore + ":" + testEvent.awayScore}</p>
          <p>{testEvent.timestampCreated}</p>
        </div>
    </CraLikeMain>
    </>
    
  );
}