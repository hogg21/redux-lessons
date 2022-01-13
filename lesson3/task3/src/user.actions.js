export const ADD_USER = 'USERS/ADD_USER';
export const REMOVE_USER = 'USERS/REMOVE_USER';


export const addUser = (userData) => {
    return {
        type: ADD_USER,
        payload: {
            userData,
        }
    }
}
export const removeUser = () => (
    {
        type: REMOVE_USER,
    }
)