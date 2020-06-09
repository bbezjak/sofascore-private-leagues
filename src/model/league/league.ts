export interface League {
    leagueId: string,
    name?: string,
    description?: string,
    admins?: string[],
    users?: string[],
    createdAtTimestamp?: number,
    updatedAtTimestamp?: number,
}