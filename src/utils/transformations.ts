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

    return league;
}

export function convertToLeagueEvent(eventData: any, _leagueId: string) {
    let league: LeagueEvent = {
        eventId: eventData.id,
        leagueId: _leagueId,
        name: eventData.name,
        homeTeam: eventData.homeTeam,
        awayTeam: eventData.awayTeam,
        homeScore: eventData.homeScore,
        awayScore: eventData.awayScore,
        timestampCreated: eventData.timestampCreated,
        timestampUpdated: eventData.timestampUpdated,
        homeTeamPlayers: eventData.homePlayers,
        awayTeamPlayers: eventData.awayPlayers
    };

    return league;
}