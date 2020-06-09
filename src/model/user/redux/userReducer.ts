import { AnyAction } from "redux";

import { UserActions } from "./userActions";
import { User } from "../user";

const initialState: User = { token: "" };

export function userReducer(state = initialState, action: AnyAction): User {
  switch (action.type) {
    case UserActions.REMEMBER_USER:
      return { ...state, rememberMe: true };
    case UserActions.INIT_USER:
      return {
        ...state,
        token: action.data.token,
        username: action.data.user.username,
        id: action.data.user.id
      };
    case UserActions.UPDATE_USER:
      debugger;
      return {...action.data.oldUser, ...action.data.newData}
    case UserActions.CLEAN_USER:
      return { ...initialState };
    default:
      return state;
  }
}
