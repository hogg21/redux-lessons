import { createStore, combineReducers } from 'redux';
import filterReducer from './users/users.reducer.js';


const appReducer = combineReducers({
    users: filterReducer
})
const store = createStore(appReducer);
export default store;