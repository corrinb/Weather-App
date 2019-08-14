import React from 'react';
import Weather from './Weather.js';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
      <>
          {
              [0,1,2,3].map(
                  (i) => {
                      return(
                          <Weather additionalDays={i}/>
                      )
                  }
              )
          }
      </>
  );
}

export default App;
