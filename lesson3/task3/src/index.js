import store from "./store.js";
import { setUser, removeUser } from "./user.actions.js";
import { addProduct, removeProduct } from "./cart.actions.js";
import { setLanguage } from "./language.actions.js";


store.subscribe(() => console.log(store.getState()));

store.dispatch(setUser({ name: 'Bob' }));
store.dispatch(removeUser())
store.dispatch(setUser({ name: 'Hogg' }));
store.dispatch(removeUser())
store.dispatch(addProduct({ id: 76, name: 'milk' }));
store.dispatch(addProduct({ id: 77, name: 'chocolate' }));
store.dispatch(removeProduct(77))
store.dispatch(setUser({ name: 'Bob' }));
store.dispatch(setLanguage('jp'));