import React from "react";
import User from './User.jsx';
import Filter from '../Filter.jsx';
import { connect } from 'react-redux';
import { filterUsersSelector, filterListSelector, usersListSelector } from "./users.selector.js";


const UsersList = ({users, filterText, filter}) => {
    return (
        <div>
            <Filter filter={filter} filterText={filterText} count={users.length}></Filter>
            <ul className="users">
                {users.map(user => (
                    <User key={user.id} {...user}></User>
                ))}
            </ul>
        </div>
    );
}

const mapState = state => {
    return {
        users: usersListSelector(state),
        filterText: filterUsersSelector(state)
    }
}
const mapDispatch = {
    filter: filterListSelector
}
const connector = connect(mapState, mapDispatch)
export default connector(UsersList);