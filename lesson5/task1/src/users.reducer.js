import { LEFT, RIGHT } from "./users.actions.js";
import users from './users.js'


const initialState = {
    usersList: users,
    currentPage: 0,
  };
  const pagesReducer = (state = initialState, action) => {
    switch (action.type) {
      case LEFT:
        return {
          usersList:state.usersList,
          currentPage: state.currentPage-1,
        };
      case RIGHT:
        return {
          usersList:state.usersList,
          currentPage: state.currentPage+1,
        };
  
      default:
        return state;
    }
  };
  export default pagesReducer;