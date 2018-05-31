import React, { Component } from "react";
import { Card, Container } from "../";
import { countdown as util_countdown } from "../../utils";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = util_countdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = "0" + value;
    }
    return value;
  }

  render() {
    const time = this.state;
    return (
      <Container>
        <Card title={time.days} body="Days" />
        <Card title={time.hours} body="Hours" />
        <Card title={time.minutes} body="Minutes" />
        <Card title={time.seconds} body="Seconds" />
      </Container>
    );
  }
}

export default Timer;
