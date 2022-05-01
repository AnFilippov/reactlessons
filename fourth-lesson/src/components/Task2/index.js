import React from "react";
import { connect } from "react-redux";
import { actionEng, actionRus } from "../redux/action";

class Task2 extends React.Component {
    constructor () {
        super();
        this.handleEng = this.handleEng.bind(this);
        this.handleRus = this.handleRus.bind(this);
    }

handleEng () {
this.props.dispatch(actionEng);
}

handleRus () {
    this.props.dispatch(actionRus);
    }

    render() {
        return(
            <div>
                 <h1>{this.props.task2}</h1>
            <button onClick={this.handleEng}>Eng</button>
            <button onClick={this.handleRus}>Rus</button>
            </div>
           
        );
    }
}

const mapstateToProps = (state) => {
    return {
        task2: state,
    }
}

export default connect(mapstateToProps)(Task2);