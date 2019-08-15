import React, {Component} from 'react';
import DayTile from './DayTile'

class Week extends Component {
  makeDayTile(obj, index) {
      return (
          <DayTile key={index} data={obj}/>
      )
  }

  render() {
    const tiles = this.props.weatherData.map( (obj, index)=>this.makeDayTile(obj, index) );
    return (
        <div className="flex-row">
            {tiles}
        </div>
    );
  }
}

export default Week;
