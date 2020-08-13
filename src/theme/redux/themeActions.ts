export enum ThemeActions {
    SET_LIGHT = "SET_LIGHT",
    SET_DARK = "SET_DARK",
    TOGGLE_THEME = "TOGGLE_THEME"
}

export const setLightTheme = () => ({
    type: ThemeActions.SET_LIGHT
})

export const setDarkTheme = () => ({
    type: ThemeActions.SET_DARK
})

export const toggleTheme = () => ({
    type: ThemeActions.TOGGLE_THEME
})