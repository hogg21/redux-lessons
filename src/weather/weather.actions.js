export const CITIES_DATA_RECEIVED = 'CITIES_DATA_RECEIVED';

export const GetWeatherData = () => {
  fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities')
    .then(response => {
      if (response.ok) {
      return response.json()
      }
      throw new Error;
  })
}

export const citiesDataReceived = (citiesData) => {
  return {
    type: CITIES_DATA_RECEIVED,
    payload: {
      citiesData
    }
  }
}

export const getWeatherData = () => {
  return function (dispatch) {
    GetWeatherData.then(citiesData => {
      dispatch(citiesDataReceived(citiesData))
    })
  }
}