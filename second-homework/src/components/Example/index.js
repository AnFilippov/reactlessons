import React from 'react';
import { v4 } from 'uuid';

let arr = ["один", "два", "три", "четыре", "пять"];

export class Example extends React.Component {
   
  render () {
  return(arr.map((item) => <div key={v4()}>{item}</div> ));
  }
}


