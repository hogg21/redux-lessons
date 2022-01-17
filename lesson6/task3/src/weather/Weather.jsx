import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { getWeatherData } from "./weather.actions.js";
import { weatherSelector } from "./weather.selectors.js";


const Weather = ({ getWeatherData }) => {
    const [weatherData, setWeatherData] = useState([])
    console.log(weatherData);
    useEffect(() => {
        getWeatherData()
    })
    return (
        <main className="weather">
            <h1 className="weather__title">Weather data</h1>
            <ul className="cities-list">
                {weatherData.map(countryWeather => (
                    <li key={countryWeather.id} className="city">
                        <span className="city__name">{countryWeather.name}</span>
                        <span className="city__temperature">{countryWeather.temperature} F</span>
                    </li>
                ))}
            </ul>
        </main>
    );
}
const mapState = state => ({
    cities: weatherSelector(state)
})
const mapDispatch = {
    getWeatherData: getWeatherData
}
export default connect(mapState, mapDispatch)(Weather);