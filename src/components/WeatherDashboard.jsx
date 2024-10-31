import React, { useState } from 'react';
import CitySearch from './CitySearch';
import CurrentWeather from './CurrentWeather';
import WeatherForecast from './WeatherForcast';
import TemperatureToggle from './TemperatureToggle';
import "./style.css"
const dummyData = {
  city: 'New York',
  current: {
    temperature: 20,
    humidity: 60,
    windSpeed: 10,
    icon: '🌤️',
  },
  forecast: [
    { day: 'Monday', temperature: 22 },
    { day: 'Tuesday', temperature: 21 },
    { day: 'Wednesday', temperature: 19 },
    { day: 'Thursday', temperature: 23 },
    { day: 'Friday', temperature: 20 },
  ],
};

const WeatherDashboard = () => {
  const [weatherData, setWeatherData] = useState(dummyData);
  const [unit, setUnit] = useState('Celsius');

  const handleCitySearch = (city) => {
    
    console.log(`Fetching weather for: ${city}`);
    
    setWeatherData(dummyData); // Update this line to fetch real data later
  };
 
  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'Celsius' ? 'Fahrenheit' : 'Celsius'));
  };

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <CitySearch onSearch={handleCitySearch} />
      <TemperatureToggle onToggle={toggleUnit} />
      <CurrentWeather data={weatherData.current} unit={unit} />
      <WeatherForecast data={weatherData.forecast} unit={unit} />
    </div>
  );
};

export default WeatherDashboard;