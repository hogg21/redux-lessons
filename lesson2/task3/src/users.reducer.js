import { ADD, DELETE } from "./users.actions";

const intialState = { usersList: [] };

export const counterReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,

        usersList: state.usersList.concat(action.user),
      };
    case DELETE:
      return {
        ...state,

        usersList: state.usersList.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
};
