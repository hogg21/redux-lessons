import React, { useEffect } from "react";
import * as weatherActions from './weather.actions.js';
import { connect } from "react-redux";
import { weatherSelector } from "./weather.selectors.js";


const Weather = ({ cities, getWeatherData }) => {
    useEffect(() => getWeatherData())
    return (
        <main className="weather">
            <h1 className="weather__title">Weather data</h1>
            <ul className="cities-list">
                {cities.map(city => (
                    <li key={city.id} className="city">
                        <span className="city__name">{city.name}</span>
                        <span className="city__temperature">{city.temperature} F</span>
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
    getWeatherData: weatherActions.getWeatherData
}
export default connect(mapState, mapDispatch)(Weather);