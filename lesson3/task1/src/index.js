import  store  from "./store.js";
import { addUser, deleteUser, updateUser } from './users.actions.js'
import { increment, decrement, reset } from './counter.actions.js';

store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(reset())

store.dispatch(addUser({ id: 6, name: 'Hogg' }));
store.dispatch(addUser({ id: 10, name: 'Ivan' }));
store.dispatch(deleteUser(10));
store.dispatch(updateUser(6, {name: 'Denis', age: 18}))

console.log(store.getState());