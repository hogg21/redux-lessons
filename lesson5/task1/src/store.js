import { createStore} from "redux";
import pagesReducer from "./users.reducer.js";

const store = createStore(pagesReducer)
export default store;