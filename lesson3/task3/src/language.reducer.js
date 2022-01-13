import { SET_CURRENT_LANGUAGE } from "./language.actions.js";


export const languageReducer = (state = 'en', action) => {
    switch (action.type) {
        case SET_CURRENT_LANGUAGE:
            return action.payload.str
        default:
            return state
    }
}