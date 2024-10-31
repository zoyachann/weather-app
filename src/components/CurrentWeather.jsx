import React from 'react';

const CurrentWeather = ({ data, unit }) => {
  const temperature = unit === 'Celsius' ? data.temperature : (data.temperature * 9/5) + 32;

  return (
    <div>
      <h2>Current Weather</h2>
      <p>Temperature: {temperature.toFixed(2)}° {unit}</p>
      <p>Humidity: {data.humidity}%</p>
      <p>Wind Speed: {data.windSpeed} km/h</p>
      <p>Condition: {data.icon}</p>
    </div>
  );
};

export default CurrentWeather;
