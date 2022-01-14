import { createSelector } from "reselect";
export const userListSelectors=state=>{
    return state.users.usersList
}

export const filterTextSelectors=state=>{
    return state.users.filterText
}
export const filterListSelectors = createSelector(
    [userListSelectors, filterTextSelectors],
    (users, filterText) =>
    users.filter((user) =>
    user.name.toUpperCase().includes(filterText.toUpperCase())
  ))