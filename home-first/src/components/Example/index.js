import React from "react";

class Example extends React.Component {
    render() {
        return (
            <div>
                <h3>Hello {this.props.name}</h3>
            </div>
        );
    }
}

export default Example;