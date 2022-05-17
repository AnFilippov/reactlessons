import React from "react";

const value = {
  name: 'Alex',
  age: 30
}

export const MyContext = React.createContext(value);
//export const MyContext = React.createContext();