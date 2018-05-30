import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card, Container } from "./Components";
import { countdown } from "./utils";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Countdown timer</h1>
        </header>
        <p className="App-intro" />
        {/* <Container>
          [ */}
          <Card title="1" body="Days" />
          <Card title="1" body="Hours" />
          <Card title="1" body="Minutes" />
          <Card title="1" body="Seconds" />
          {/* ] */}
        {/* </Container> */}
      </div>
    );
  }
}

export default App;
