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

export const getWeatherData = () =>
  // eslint-disable-next-line func-names
  function (dispatch) {
    GetWeatherData ().then(citiesData => {
      dispatch(citiesDataRecived(citiesData));
    });
  };