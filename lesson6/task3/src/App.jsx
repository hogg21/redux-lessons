import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Weather from "./weather/Weather.jsx";


const App = () => {
    return (
        <Provider store={store}>
            <Weather></Weather>
        </Provider>
    )
}
export default App;