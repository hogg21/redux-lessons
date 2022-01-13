import { createStore, combineReducers } from 'redux';
import { usersReducer } from './user.reducer.js';
import { productReducer } from './cart.reducer.js';
import { languageReducer } from './language.reducer.js';

const appReduces = combineReducers(
    {
        language: languageReducer,
        user: usersReducer,
        cart: productReducer
    }
)
const store = createStore(appReduces, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;