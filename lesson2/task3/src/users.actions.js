export const ADD = 'USER/ADD';
export const DELETE = 'USER/DELETE';
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
