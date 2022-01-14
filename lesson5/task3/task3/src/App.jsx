import React from "react";
import UsersList from './users/UsersList.jsx';
import { Provider } from "react-redux";
import store from "./store.js";
import users from './users/users.js'

const App = () => {
    return (
        <Provider store={store}>
            <UsersList users={users}></UsersList>
        </Provider>
    )
}
export default App;