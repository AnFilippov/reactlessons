import React from "react";

export class Task2 extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 0, 
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSub = this.handleSub.bind(this);
    }

handleAdd () {
this.setState({value: this.state.value + 1});
}

handleSub () {
    this.setState({value: this.state.value - 1});
}

    render () {
        return(
            <div>
                <h2>{this.state.value}</h2>
                <button onClick={this.handleAdd}>+</button>
                <button onClick={this.handleSub}>-</button>
            </div>
        );
    }
}