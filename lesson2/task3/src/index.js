import { store } from "./store.js";
import {addUser, deleteUser} from './users.actions.js'

store.dispatch(addUser({ id: 19, name: 'Hogg' }));
store.dispatch(addUser({ id: 27, name: 'Ivan' }));
store.dispatch(deleteUser({id: 19}))
store.dispatch(deleteUser(27));
console.log(store.getState())