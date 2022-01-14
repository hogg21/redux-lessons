import { createStore, combineReducers } from 'redux';
import { usersReducer } from './users.reducer.js';

const appReducers = combineReducers({
    users: usersReducer
})
const store = createStore(appReducers);
export default store;