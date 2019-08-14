import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Weather.css';
import Date from './Date.js';
import partlyCloudy from './partly_cloudy.png';

class WeatherTile extends Component {
  propTypes: {
    daysProp: PropTypes.number,
    highTemp: PropTypes.func,
  }

  render() {
    return (
      <div className="border">
          <Date additionalDays={this.props.daysProp}/>
          <img src={partlyCloudy} alt="sunny"/>
          <div>
              <span>{this.props.highTemp()}º</span>
              <span>69º</span>
          </div>
      </div>
    );
  }
}

export default WeatherTile;
