import { ADD_USER, DELETE_USER } from './users.actions.js';
const initialState = {
    userList: []
}
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                userList: [...state.userList, action.userData]
            }
        case DELETE_USER:
            return {
                ...state,
                userList: state.userList.filter(user => user.id !== action.id)
            }
        default:
            return state;
    }
}
