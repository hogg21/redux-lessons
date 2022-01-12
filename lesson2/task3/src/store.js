import { createStore } from "redux";
import { usersReducer } from "./users.reducer.js";
export const store = createStore(usersReducer);