import React from "react";

class ErrorTest extends React.Component {
  constructor() {
    super();
    this.handlerClick = this.handlerClick.bind(this);
  }
  state = {
    count: 0,
  }
  handlerClick() {
    this.setState({ count: this.state.count + 1 });

  }

  render() {

    if (this.state.count === 3) {
      throw new Error('My error');
    }
    return (
      <div>
        <h2>My error</h2>
        <div>{this.state.count}</div>
        <button onClick={this.handlerClick}>Click</button>
      </div>
    )
  }

}



export default ErrorTest;