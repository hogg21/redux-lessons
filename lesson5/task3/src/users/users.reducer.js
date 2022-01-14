import users from './users.js';
import { FILTER_USER } from './users.action.js';

const initialState = {
    usersList: users,
    filterText: ''
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_USER: {
            return {
                ...state,
                filterText: action.payload.text
            }
        }
        default:
            return state
            
    }
}
export default filterReducer;