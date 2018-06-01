import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Timer } from './Components';
import { months } from './Constants';

class App extends Component {
  render() {
    const year = 2018;
    const month = months.JULY;
    const date = 1;
    // 24 hour format
    const hours = 8;
    const minutes = 0;
    const countdownDate = new Date(
      year,
      month,
      date,
      hours,
      minutes
    ).toLocaleString('en-US", { timeZone: "America/Mexico_city" });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            <span role="img" aria-label="mx">🇲🇽</span>
            Elections React Countdown timer
            <span role="img" aria-label="mx">🇲🇽</span>
          </h1>
        </header>
        <Timer date={countdownDate} />
      </div>
    );
  }
}

export default App;
