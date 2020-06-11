import { LeagueEvent } from '../model/leagueEvent/event';
import { League } from "../model/league";

export function convertToLeague(leagueData: any) {
    let league: League = {
        leagueId: leagueData.id,
        name: leagueData.name,
        description: leagueData.description,
        admins: leagueData.admins,
        users: leagueData.users,
        createdAtTimestamp: leagueData.createdAtTimestamp,
        updatedAtTimestamp: leagueData.updatedAtTimestamp
    };

    debugger;
    let events: LeagueEvent[] = [];
    leagueData.events.forEach((eventData: any) => {
        const event: LeagueEvent = convertToLeagueEvent(eventData);
        events.push(event);
    });

    league.events = events;
    return league;
}

export function convertToLeagueEvent(eventData: any) {
    debugger;
    let event: LeagueEvent = {
        eventId: eventData.id,
        leagueId: eventData.leagueId,
        eventName: eventData.eventName,
        homeTeam: eventData.homeTeam,
        awayTeam: eventData.awayTeam,
        homeScore: eventData.homeScore,
        awayScore: eventData.awayScore,
        timestampCreated: eventData.timestampCreated,
        timestampUpdated: eventData.timestampUpdated,
        homeTeamPlayers: eventData.homePlayers,
        awayTeamPlayers: eventData.awayPlayers,
        admins: eventData.admins
    };

    return event;
}