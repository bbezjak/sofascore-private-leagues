import { LeagueEvent } from './../leagueEvent/event';
export interface League {
    leagueId: string,
    name?: string,
    description?: string,
    events?: LeagueEvent[],
    admins?: string[],
    users?: string[],
    createdAtTimestamp?: number,
    updatedAtTimestamp?: number,
}