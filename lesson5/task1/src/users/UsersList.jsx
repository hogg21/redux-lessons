import React from "react";
import { connect } from "react-redux";
import { leftNav, rightNav } from "../users.actions";
import { currentPageSelectors, userListSelectors } from "../users.selectors";
import Pagination from "./Pagination";
import User from "./User";

const UsersList = ({ users, left, right,currentPage }) => {
 const itemsPerPage=3;
 
  const start = currentPage * itemsPerPage;
  const usersToDisplay = users.slice(start, start + itemsPerPage);

  return (
    <div>
      <Pagination
        goPrev={left}
        goNext={right}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {usersToDisplay.map((el) => (
          <User key={el.id} {...el} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: userListSelectors(state),
    currentPage: currentPageSelectors(state),
  };
};

const mapDispatch = (dispatch) => {
  return {
    left: () => dispatch(leftNav()),
    right: () => dispatch(rightNav()),
  };
};

const connector = connect(mapStateToProps, mapDispatch);

export default connector(UsersList);