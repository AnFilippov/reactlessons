import React from "react";
import { Subject } from "../../context-api/myContextTwo";


class ContexHomeWork extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    value: false,
  }

  static contextType = Subject;

  handleClick() {
    this.setState({ value: !this.state.value });

  }

  componentDidMount() {
    !this.state.value ? document.body.style.backgroundColor = 'red' : document.body.style.backgroundColor = 'blue';
  }

  componentDidUpdate() {
    this.state.value ? document.body.style.backgroundColor = 'blue' : document.body.style.backgroundColor = 'red';
  }

  render() {
    const { nameRed, nameBlue } = this.context;
    console.log(this.state.value);
    return (
      <div>
        <h2>
          {!this.state.value ? nameRed : nameBlue}
        </h2>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default ContexHomeWork;