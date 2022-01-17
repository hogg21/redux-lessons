import React, { useEffect, useState } from "react";
import { GetWeatherData } from './weather.actions.js';
import { connect } from "react-redux";


const Weather = ({ GetWeatherData }) => {
    const [weatherData, setWeatherData] = useState([])
    useEffect(() => {
        GetWeatherData().then(data => setWeatherData(data))
    }, [])
    console.log(weatherData);
    return (
        <main className="weather">
            <h1 className="weather__title">Weather data</h1>
            <ul className="cities-list">
                {weatherData.map(cities => (
                    <li key={cities.id} className="city">
                        <span className="city__name">{cities.name}</span>
                        <span className="city__temperature">{cities.temperature} F</span>
                    </li>
                ))}
            </ul>
        </main>
    );
}

const mapDispatch = {
    GetWeatherData: GetWeatherData
}
export default connect(null, mapDispatch)(Weather);