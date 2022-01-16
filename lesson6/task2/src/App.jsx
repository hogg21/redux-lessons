import React from "react";
import store from "./store.js";
import { Provider } from "react-redux";
import UserInfo from './users/UserInfo.jsx';
import SearchField from "./users/SearchField.jsx";


const App = () => {
    return (
        <div className="page">
            <Provider store={store}>
                <UserInfo></UserInfo>
                <SearchField></SearchField>
            </Provider>
        </div>
    );
}

export default App;