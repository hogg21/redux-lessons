import { ADD_USER, REMOVE_USER } from "./user.actions.js";


export const usersReducer = (state = null, action) => {
    switch (action.type) {
        case ADD_USER: {
            return {
                ...state,
                ...action.payload.userData
            }
        }
        case REMOVE_USER: {
            return null
        }
        default:
            return state
    }
}