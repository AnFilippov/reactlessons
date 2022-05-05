import React, { useContext } from "react";
import { MyContext } from "../../context-api/myContext";

//class Context extends React.Component {
//  render() {
//    return (
//      <div>
//        Context

//        <MyContext.Consumer>
//          {value => {
//            console.log(value);
//            const { name, age } = value;
//            return <h2>My name is {name}, I`m {age} year old</h2>
//          }
//          }
//        </MyContext.Consumer>
//      </div>
//    )
//  }
//}

//class Context extends React.Component {
//  static contextType = MyContext;

//  render() {
//    console.log(this.context);
//    const { name, age } = this.context;
//    return <h2>My name is {name}, I`m {age} year old</h2>
//  }
//}

const Context = () => {

  const context = useContext(MyContext);

  console.log(context);
  const { name, age } = context;
  return <h2>My name is {name}, I`m {age} year old</h2>
}


export default Context;