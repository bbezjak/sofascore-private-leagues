import { AnyAction } from "redux";

import { Theme, lightTheme, darkTheme } from "../theme";
import { ThemeActions } from "./themeActions";

export function ThemeReducer(state: Theme = lightTheme, action: AnyAction): Theme {
  switch (action.type) {
    case ThemeActions.SET_DARK:
      return darkTheme;
    case ThemeActions.SET_LIGHT:
      return lightTheme;
    default:
      return state;
  }
}
