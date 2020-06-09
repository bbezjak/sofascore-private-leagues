import { AnyAction } from 'redux';

import { ThemeOption, Theme } from '../theme';
import { ThemeActions } from './themeActions';

const initialState: Theme = {choice: ThemeOption.LIGHT}

export function ThemeReducer(state: Theme = initialState, action: AnyAction): Theme {
    switch(action.type) {
        case(ThemeActions.SET_LIGHT):
            return initialState;
        case(ThemeActions.SET_DARK):
            return {choice: ThemeOption.DARK}
        default:
            return initialState;    
    }
}