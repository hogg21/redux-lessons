import { store } from "./store.js";
import {addUser, deleteUser} from './users.actions.js'

store.dispatch(addUser({ id: 76, name: "Sarah" }));
console.log(store.getState());
store.dispatch(addUser({ id: 74, name: "Sarah" }));
console.log(store.getState());
store.dispatch(deleteUser(76));
console.log(store.getState());