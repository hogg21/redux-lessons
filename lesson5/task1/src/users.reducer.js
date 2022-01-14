import { GO_NEXT, GO_PREV } from "./users.actions.js";
import users from './users.js'


const initialState = {
    usersList: users,
    currentPage: 0
}
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GO_NEXT: {
            return {
                ...state,
                currentPage: state.currentPage + 1
            }
        }
        case GO_PREV: {
            return {
                ...state,
                currentPage: state.currentPage - 1
            }
        }
        default:
            return state;
    }
}