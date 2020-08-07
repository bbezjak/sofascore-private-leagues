import React from "react"
import { ThemeProvider as StyledComponentsProvider} from "styled-components"
import { useSelector } from 'react-redux';
import { ReduxState } from './../store/index';

// https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/

export const ThemeProvider = ({children}: any) => {
    const { theme } = useSelector((state: ReduxState) => state);

    return (
        <StyledComponentsProvider theme = {theme}>
            {children}
        </StyledComponentsProvider>
    )
}