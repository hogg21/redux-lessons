import users from './users.js';
import { FILTER_LIST } from './users.action.js';

const initialState = {
    filterText: "",
    usersList: users,
  };
  const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FILTER_LIST: {
        const { text } = action.payload;
        return { ...state, filterText: text };
      }
      default:
        return state;
    }
  };
  export default usersReducer;