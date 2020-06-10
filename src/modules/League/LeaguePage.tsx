import React, { useState, useEffect} from "react";
import { League } from "../../model/league";
import { Button } from "../../components";
import { CraLikeMain, FlexboxList, convertToLeague } from "../../utils";
import { useParams, useHistory } from "react-router-dom";
import { Header } from "../Header";
import { LeagueEditModal } from "./components/LeagueEditModal";
import { LeagueEvent } from "../../model/leagueEvent";
import { LeagueEventElem } from "./components/LeagueEventElem";
import { PageTitle } from "../../components";
import { useSelector } from "react-redux";
import { ReduxState } from "../../store";
import { getLeagueById, getEventsByLeagueId, deleteLeagueById } from "../../api";
import { CreateEventModal } from "./components/CreateEventModal";
import { EditLeagueCreateEvent } from "./hooks/EditLeagueCreateEvent";

// https://www.pluralsight.com/guides/react-router-typescript

interface Params {
  id: string;
}

export function LeaguePage() {
  const [editLeague, createEvent, setEditLeague, setCreateEvent] = EditLeagueCreateEvent();
  const [league, setLeague] = useState<League>();
  const [events, setEvents] = useState<LeagueEvent[]>([]);
  const user = useSelector( (state: ReduxState) => state.user);
  let params = useParams<Params>();
  const history = useHistory();

  // TODO dodaj spinner

  async function fetchLeague() {
    await getLeagueById(params.id, user.token)
        .then((res) => {
          let league: League = convertToLeague(res.data);
          setLeague(league);
        })
        .catch((err) => {
            // TODO dodaj error div
            debugger;
        })
  }

  async function fetchEvents() {
    await getEventsByLeagueId(params.id, user.token)
        .then((res) => {
          // TODO obradi evente za ligu
          debugger;
        })
        .catch((err) => {
            // TODO dodaj error div
            debugger;
        })
  }

  useEffect( () => {
    fetchLeague();
    fetchEvents();
  }, [])

  function addAdmins() {
    // TODO set request to add admins
  }
  
  function addUsers() {
    // TODO set request to add users
  }

  function updateLeague(newLeague: Partial<League>) {
    debugger;
    league!==undefined && setLeague({...league, ...newLeague});
  }

  function deleteLeague() {
    debugger;
    if(league === undefined) return;

    deleteLeagueById(league.leagueId, user.token)
      .then(() =>  history.goBack())
      .catch((err) => {
        debugger;
        // TODO neki mobile friendly error page
      })
  }

  function addEventToList(event: LeagueEvent) {
    setEvents([...events, event])
    setCreateEvent(false)
  }

  return (
    <>
      <Header />
      <CraLikeMain>
      {editLeague && (
         // @ts-ignore, league will always be defined, be carefull with props
        <LeagueEditModal league={league} onSuccess={addEventToList} cancelEdit={() => setEditLeague(false)} />
      )}
      
      {createEvent && (
         // @ts-ignore, league will always be defined, be carefull with props
        <CreateEventModal league={league} onSuccess={updateLeague} cancelEdit={() => setCreateEvent(false)} />
      )}
      <PageTitle>League name: {league?.name}</PageTitle>
      {user.id && league?.admins?.includes(user.id) && (
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
          <Button onClick={() => setEditLeague(true)}>
            <span>Update</span>
          </Button>
          <Button onClick={deleteLeague}>
            <span>Delete</span>
          </Button>
        </div>
        <div>
        <Button onClick={() => setCreateEvent(true)}>
            <span>Add event</span>
          </Button>
        </div>
        </>
      )}
      <FlexboxList>
        {events.length ===0 ?
          <p>No events in selected league</p> :
          events.map((event, index) => (
            // @ts-ignore, league will always be defined, be carefull with props
            <LeagueEventElem key={league.leagueId + "_" + event.eventId + "_" + index} leagueId={league.leagueId} event={testEvent} />
          ))
        }
      </FlexboxList>
      </CraLikeMain>
    </>
  );
}