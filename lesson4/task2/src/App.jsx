import React from "react";
import { Provider } from "react-redux";
import store from "./users/store.js";
import Users from '../src/users/Users.jsx';

const App = () => {
    return (
        <Provider store={store}>
            <Users></Users>
        </Provider>
    );
}
export default App;