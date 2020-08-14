import { League } from './../model/league/league';
import { Theme } from './../theme';
import { User } from './../model/user';

export interface ReduxState {
    user: User,
    theme: Theme
    leagues: League[]
}

export * from "./store";