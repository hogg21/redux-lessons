export const FILTER_USER = 'USERS/FILTER_USER';

export const filterUserByValue = (text) => {
    return {
        type: FILTER_USER,
        payload: {
            text
        }
    }
}