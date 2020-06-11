import React, { useState, useEffect } from "react";
import { League } from "../../model/league";
import { Button, PageTitle } from "../../components";
import { CraLikeMain, FlexboxList, convertToLeagueEvent } from "../../utils";
import { useParams, useHistory } from "react-router-dom";
import { Header } from "../Header";
import styled from "styled-components";
import { HomeLeagueElem } from "../Home/components/HomeLeagueElem";
import { ModifyEventModal } from "./components/ModifyEventModal";
import { LeagueEvent } from "../../model/leagueEvent";
import { useSelector } from "react-redux";
import { ReduxState } from "../../store";
import { getEventByLeagueIdEventId, deleteEventByLeagueIdEventId } from "../../api";

// https://www.pluralsight.com/guides/react-router-typescript

const testEvent: Partial<LeagueEvent> = {
  eventId: "aaa1",
  leagueId: "aaa",
  eventName: "event",
  homeTeam: "team A",
  awayTeam: "team B",
  homeScore: 2,
  awayScore: 0,
  timestampCreated: "5511026",
  timestampUpdated: "5511026",
  homeTeamPlayers: ["Miro", "Pero"],
  awayTeamPlayers: ["Marko", "Zarko"],
};

const eventTemplate: LeagueEvent = {
  eventId: "",
  leagueId: ""
};

interface Params {
  leagueId: string,
  eventId: string;
}

export function EventPage() {
  const user = useSelector( (state: ReduxState) => state.user)
  const [edit, setEdit] = useState(false);
  const [event, setEvent] = useState(eventTemplate);
  let params = useParams<Params>();
  const history = useHistory();

  // TODO dodaj spinner
  
  async function fetchEvent() {
    await getEventByLeagueIdEventId(params.leagueId, params.eventId,  user.token)
        .then((res) => {
          let event: LeagueEvent = convertToLeagueEvent(res.data);
          debugger;
          setEvent(event);
        })
        .catch((err) => {
            // TODO dodaj error div
            debugger;
        })
  }

  useEffect( () => {
    fetchEvent();
  }, [])

  function patchEvent() {
    setEdit(true);
  }

  function deleteEvent() {
    debugger;
    if(event === undefined) return;

    deleteEventByLeagueIdEventId(event.leagueId, event.eventId, user.token)
      .then(() =>  history.goBack())
      .catch((err) => {
        debugger;
        // TODO neki mobile friendly error page
      })
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
        <ModifyEventModal oldEvent={event} cancelEdit={() => setEdit(false)} />
      )}
      <PageTitle>Event name: {event.eventName}</PageTitle>
        {user.id && event?.admins?.includes(user.id) && (
        <>
        <div>
           <Button onClick={addAdmins}>
            <span>Add Admins</span>
          </Button>
          <Button onClick={addUsers}>
            <span>Add Users</span>
          </Button>
        </div>
        <div>
          <Button onClick={() => setEdit(true)}>
            <span>Update</span>
          </Button>
          <Button onClick={deleteEvent}>
            <span>Delete</span>
          </Button>
        </div>
        </>
      )}
      <PageTitle>{event.homeTeam} vs {event.awayTeam}</PageTitle>
    </CraLikeMain>
    </>
    
  );
}