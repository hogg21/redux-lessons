export const ADD = 'USER/ADD_USER';
export const DELETE= 'USER/DELETE_USER';
export const addUser = (userData) => {
    return {
        type: ADD,
        userData
    }
}
export const deleteUser = (id) => {
    return {
        type: DELETE,
        id
    }
}
