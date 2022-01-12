import { createStore } from "redux";
import { counterReducer } from "./users.reducer.js";
const store = createStore(counterReducer);
export default store;