export const SET_CURRENT_LANGUAGE = 'LANGUAGE/SET_CURRENT_LANGUAGE';

export const setLanguage = (str) => {
    return {
        type: SET_CURRENT_LANGUAGE,
        payload: {
            str,
        }
    }
}