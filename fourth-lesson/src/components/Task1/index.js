import React from "react";

class Task1 extends React.Component {

    componentWillMount() {
        alert("Компонент смонтирован");
    }

    componentWillUnmount() {
        alert("Компонент размонтирован");
    }
render() {
    return (
        <h1>Hello</h1>
    );
}
}

export default Task1;