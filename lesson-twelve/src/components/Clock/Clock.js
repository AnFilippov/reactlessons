import React, { useEffect, useState } from "react";

//class Clock extends React.Component {
//  constructor(props) {
//    super(props);
//    this.state = { date: new Date() };
//  }

//  componentDidMount() {
//    this.timerID = setInterval(
//      () => this.tick(),
//      1000
//    );
//  }

//  componentWillUnmount() {
//    clearInterval(this.timerID);
//  }

//  tick() {
//    this.setState({
//      date: new Date()
//    });
//  }

//  render() {
//    return (
//      <div>
//        <h1>Привет, мир!</h1>
//        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
//      </div>
//    );
//  }
//}

function Clock() {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timerID = setInterval(
      () => setDate(new Date()),
      1000
    );
    return () => {
      clearInterval(timerID);
    }
  }
  );

  return (
    <div>
      <h1>Привет, мир!</h1>
      <h2>Сейчас {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Clock;