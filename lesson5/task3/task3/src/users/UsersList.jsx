import React from "react";
import { connect } from "react-redux";
import { filterList } from "./users.actions";
import {
  filterListSelectors,
  filterTextSelectors,
  userListSelectors,
} from "./users.selectors";
import Filter from "./Filter";
import User from "./User";

const UsersList = ({ users, filterText, filter }) => {
 
  return (
    <div>
      <Filter filter={filter} filterText={filterText} count={users.length} />
      <ul className="users">
        {users.map((el) => (
          <User key={el.id} {...el} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: filterListSelectors(state),
    filterText: filterTextSelectors(state),
  };
};

const mapDispatch = {
  filter: filterList,
};

const connector = connect(mapStateToProps, mapDispatch);

export default connector(UsersList);