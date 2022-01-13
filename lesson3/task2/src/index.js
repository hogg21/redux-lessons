import { store } from "./counter.js";
import { increment, decrement } from "./counter";

store.subscribe(() => console.log(store.getState));

store.dispatch(increment());
store.dispatch(increment())
store.dispatch(decrement())