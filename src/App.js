import React from 'react';
import WeatherTile from './WeatherTile.js';
import './App.css';

function highTemp() {
  return 82;
}
const makeWeatherBlock = i => <WeatherTile daysProp={i} key={i+"-tile"} highTemp={highTemp}/>;

function App() {
  let weatherBlocks = [0,1,2,3].map(makeWeatherBlock);

  return (
      <>
          {weatherBlocks}
      </>
  );
}

export default App;
