import { GetWeatherData  } from "./weather.gateway.js";
export const CITIES_DATA_RECIVED = 'CITIES_DATA_RECIVED';

export const citiesDataRecived = citiesData => {
    return {
        type: CITIES_DATA_RECIVED,
        payload: {
            citiesData
        }
    }
}

export const getWeatherData = () => {
  return function (dispatch) {
    GetWeatherData ().then(citiesData => {
      dispatch(citiesDataRecived(citiesData));
    });
  };
}