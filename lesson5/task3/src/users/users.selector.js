import { createSelector } from 'reselect';

export const filterUsersSelector = state => {
    return state.users.filterText
}
export const usersListSelector = state => {
    return state.users.usersList
}

export const filterListSelectors = createSelector(
    [usersListSelector, filterUsersSelector],
    (users, filterText) =>
    users.filter((user) =>
    user.name.toUpperCase().includes(filterText.toUpperCase())
  ))