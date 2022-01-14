import { createStore, combineReducers } from "redux";
import usersReducer from "./users.reducer.js";

const appReducers = combineReducers({
    users: usersReducer
})

const store = createStore(appReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;


// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()