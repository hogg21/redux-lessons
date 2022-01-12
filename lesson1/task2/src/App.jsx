import React from "react";
import { user } from "./context.js";
import Header from "./Header";

class App extends React.Component {
    state = {
        userData: user.user1,
    }
    render() {
        return (
            <div className="page">
                    <Header></Header>
            </div>
        )
    }
}
export default App;