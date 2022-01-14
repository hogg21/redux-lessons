import { ADD, DELETE, UPDATE } from "./users.actions";

const initialState = {
  usersList: []
}
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      {
        return {
          ...state,
          usersList: state.usersList.concat(action.payload.userData)
        }
      }
    case DELETE: {
      const newList = state.usersList.filter(user => user.id !== action.payload.id)
      return {
        ...state,
        usersList: newList
      }
    }
    case UPDATE: {
      const newList = state.usersList.map(user => {
        if (user.id === action.payload.userId) {
          return {
            ...user,
            ...action.payload.userData
          }
        }
        return user;
      })
      return {
        ...state,
        usersList: newList
      }
    }
    default:
      return state
  }
}
export default usersReducer;