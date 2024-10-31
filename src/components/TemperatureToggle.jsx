import React from 'react';

const TemperatureToggle = ({ onToggle }) => {
  return (
    <div>
      <button onClick={onToggle}>Toggle Temperature Unit</button>
    </div>
  );
};

export default TemperatureToggle;