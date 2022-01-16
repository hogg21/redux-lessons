import { CITIES_DATA_RECIVED } from "./weather.actions.js";

const initialState = {
    citiesData: []
}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case CITIES_DATA_RECIVED: {
            return {
                ...state,
                citiesData: action.payload.citiesData
            }
        }
        default:
            return state
    }
}
export default weatherReducer;