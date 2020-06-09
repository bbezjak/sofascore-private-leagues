export interface LeagueEvent {
    eventId: string,
    leagueId: string,
    name: string,
    homeTeam: string,
    awayTeam: string,
    homeScore: number,
    awayScore: number,
    timestampCreated: string,
    timestampUpdated: string,
    homeTeamPlayers: string[],
    awayTeamPlayers: string[]

  // admins - to dobiješ od lige
}