import React, {Component} from 'react';
import './Weather.css';
import Date from './Date.js';
import cloudy from './cloudy.svg';
import sunny from './sunny.svg';
import thunderstorms from './thunderstorms.svg';

class DayTile extends Component {
  render() {

    const forecastImages = {
        "sunny": sunny ,
        "cloudy": cloudy ,
        "thunderstorms": thunderstorms
    }
    const data = this.props.data;

    return (
      <div className="border flex-1-7">
          <Date additionalDays={data.additionalDay}/>
          <img src={forecastImages[data.forecast]} alt={data.forecast}/>
          <div>
              <span>{data.highTemp}º</span>
              <span>{data.lowTemp}º</span>
          </div>
      </div>
    );
  }
}

export default DayTile;
