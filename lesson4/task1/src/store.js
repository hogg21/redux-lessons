import { createStore } from "redux";
import { counterReducer } from "./counter.reduces.js";

const store = createStore(counterReducer);
export default store;