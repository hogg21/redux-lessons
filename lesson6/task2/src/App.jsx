import React from "react";
import store from "./store.js";
import { Provider } from "react-redux";
import UserInfo from './users/UserInfo.jsx';
import SearchField from "./users/SearchField.jsx";


const App = () => {
    return (
        <Provider store={store}>
            <div className="page">
                <UserInfo></UserInfo>
                <SearchField></SearchField>
            </div>
        </Provider>
    );
}

export default App;