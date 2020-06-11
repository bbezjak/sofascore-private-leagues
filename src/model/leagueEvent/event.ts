export interface LeagueEvent {
    eventId: string,
    leagueId: string,
    eventName?: string,
    homeTeam?: string,
    awayTeam?: string,
    homeScore?: number,
    awayScore?: number,
    timestampCreated?: string,
    timestampUpdated?: string,
    homeTeamPlayers?: string[],
    awayTeamPlayers?: string[],
    admins?: string[]

  // admins - to dobiješ od lige
}