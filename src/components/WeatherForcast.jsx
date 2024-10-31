import React from 'react';

const WeatherForecast = ({ data, unit }) => {
  return (
    <div>
      <h2>5-Day Forecast</h2>
      <ul>
        {data.map((day, index) => (
          <li key={index}>
            {day.day}: {unit === 'Celsius' ? day.temperature : (day.temperature * 9/5) + 32}° {unit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherForecast;
