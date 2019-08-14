import React from 'react';
import './Weather.css';
import Date from './Date.js';
import partlyCloudy from './partly_cloudy.png';

function Weather({additionalDays}) {
  return (
    <div className="border">
        <Date additionalDays={additionalDays}/>
        <img src={partlyCloudy}/>
        <div>
            <span>78º</span>
            <span>69º</span>
        </div>
    </div>
  );
}

export default Weather;
