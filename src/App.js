import React, {Component} from 'react';
import Week from './Week';
import './App.css';

const weatherData = [
    { additionalDay: 0, forecast: 'sunny', highTemp: 82, lowTemp: 67 },
    { additionalDay: 1, forecast: 'sunny', highTemp: 80, lowTemp: 76 },
    { additionalDay: 2, forecast: 'thunderstorms', highTemp: 89, lowTemp: 74 },
    { additionalDay: 3, forecast: 'sunny', highTemp: 79, lowTemp: 67 },
    { additionalDay: 4, forecast: 'cloudy', highTemp: 76, lowTemp: 68 },
    { additionalDay: 5, forecast: 'cloudy', highTemp: 80, lowTemp: 69 },
    { additionalDay: 6, forecast: 'sunny', highTemp: 88, lowTemp: 77 }
]

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weeksCounter:1
        };
        this.addWeek = this.addWeek.bind(this);
    }

    addWeek() {
        this.setState({weeksCounter:this.state.weeksCounter + 1});
    }

    render() {
        const weeksArray = [];
        for (let i = 0; i < this.state.weeksCounter; i++) {
            weeksArray.push( <Week key={i} weatherData={weatherData}/> );
        }
        return (
            <div>
                {weeksArray}
                <button onClick={this.addWeek}>Next Week</button>
            </div>
        )
    }
}

export default App;
