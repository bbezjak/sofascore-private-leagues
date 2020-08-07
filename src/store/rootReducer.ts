import { combineReducers } from "redux";
import { userReducer } from "../model/user";
import { ThemeReducer } from "../theme";

export const RootReducer = combineReducers({
  user: userReducer,
  theme: ThemeReducer,
});
