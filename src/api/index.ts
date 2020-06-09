export * from "./auth/loginUser"
export * from "./auth/checkToken"
export * from "./auth/registerUser"

export * from "./leagues/getLeagues"
export * from "./leagues/postLeagues"

export * from "./leagues/id/getDeleteByLeagueId";
export * from "./leagues/id/patchLeagueById";

export * from "./leagues/id/admins/adminsByLeagueId";

export * from "./leagues/id/events/getEventsByLeagueId";
export * from "./leagues/id/events/postEventsByLeagueId";

export * from "./leagues/id/events/id/getDeleteEventByLeagueIdEventId";
export * from "./leagues/id/events/id/patchEventByLeagueIdEventId";

export * from "./leagues/id/users/usersByLeagueId";

export * from "./user/getDeleteMe"
export * from "./user/getUserById"
export * from "./user/patchMe";
export * from "./user/getUserByUsername";

export * from "./fetch"