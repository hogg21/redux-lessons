import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counter.reduces.js";
import usersReducer from "./users.reducer.js";

const appReduces = combineReducers({
    counter: counterReducer,
    users: usersReducer

})
const store = createStore(appReduces);
export default store;


// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()