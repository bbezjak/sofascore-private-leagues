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
  awayTeamPlayers: ["Marko", "Zarko"]
};

const mockedEvents = [testEvent, testEvent, testEvent, testEvent, testEvent]

interface Params {
  id: string;
}

export function LeaguePage() {
  const [edit, setEdit] = useState(false);
  const [league, setLeague] = useState<League>();
  const [events, setEvents] = useState<LeagueEvent[]>([]);
  const user = useSelector( (state: ReduxState) => state.user);
  let params = useParams<Params>();
  const history = useHistory();

  // TODO dodaj spinner
  // TODO dodaj fetch za ligu

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

  function patchLeague() {
    setEdit(true);
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

  return (
    <>
      <Header />
      <CraLikeMain>
      {edit && (
        // @ts-ignore, league will always be defined, be carefull with props
        <LeagueEditModal oldLeague={league} cancelCreating={() => setEdit(false)} />
      )}
      <PageTitle>League name: {league?.name}</PageTitle>
      {user.id && ( //kao ako je user admin onda ima prava
        <div>
           <Button onClick={addAdmins}>
            <span>Add Admins</span>
          </Button>
          <Button onClick={addUsers}>
            <span>Add Users</span>
          </Button>
          <Button onClick={patchLeague}>
            <span>Update</span>
          </Button>
          <Button onClick={deleteLeague}>
            <span>Delete</span>
          </Button>
        </div>
      )}
      <FlexboxList>
        {events.length !==0 && mockedEvents.map((event, index) => (
          // @ts-ignore, league will always be defined, be carefull with props
          <LeagueEventElem key={league.leagueId + "_" + event.eventId + "_" + index} leagueId={league.leagueId} event={testEvent} />
        ))}
      </FlexboxList>
    </CraLikeMain>
    </>
    
  );
}