import React from "react";
import { connect } from 'react-redux';
import * as usersActions from './users.actions.js';
const SearchField = (fetchUserData) => {
    const [userName, setUserName] = useState("");
    return (
        <div className="name-form">
            <input
                type="text"
                className="name-form__input"
                value={this.state.userName}
                onChange={(e) => setUserName(e.target.value)} />
                <button className="name-form__btn btn" onClick={() => fetchUserData(userName)}>Show</button>
        </div>
    );
}
const mapDispatch = {
    fetchUserData: usersActions.fetchUserData
}
export default connect(null, mapDispatch)(SearchField);