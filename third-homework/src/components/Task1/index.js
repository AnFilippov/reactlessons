import React from 'react';
import { v4 } from 'uuid';


let arr = ["Ivan", "Andrey", "Olena", "Galina", "Edd"];

export class Task1 extends React.Component {
    render () {
        return (
            <ul>
                {arr.map((item) => <li key={v4()}>{item}</li>)}
            </ul>
        );
    }
}