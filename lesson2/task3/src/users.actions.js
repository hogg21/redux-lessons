export const ADD_USER = 'USER/ADD_USER';
export const DELETE_USER = 'USER/DELETE_USER';
export const addUser = (userData) => {
    return {
        type: ADD_USER,
        userData
    }
}
export const deleteUser = (id) => {
    return {
        type: DELETE_USER,
        id
    }
}
