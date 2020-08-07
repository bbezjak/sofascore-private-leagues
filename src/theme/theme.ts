import * as kobe_black from "./../image/kobe_usa_black.jpg";
import * as kobe_take_flight from "./../image/kobe_take_flight.jpg";
import * as kobe_white from "./../image/thumb-1920-1063466.png";

export interface Theme {
  backgroundImage: any,
  primaryColor: string,
}

export const lightTheme: Theme = {
  backgroundImage: kobe_white,
  primaryColor: "rgb(153,50,204)",
};
export const darkTheme: Theme = {
  backgroundImage: kobe_take_flight,
  primaryColor: "rgb(153,50,204,0.8)", //FFFF00

};

export const PRIMARY_COLOR = "#ab47bc";
export const PRIMARY_COLOR_LIGHT = "#df78ef";
export const PRIMARY_COLOR_DARK = "#790e8b";

export const BACKGROUND_COLOR = "#121212";
export const SURFACE_BACKGROUND_COLOR = "rgba(255, 255, 255, 0.1)";
export const TEXT_COLOR = "#121212";
