import React from "react";
import { renderRoutes } from 'react-router-config';

export function Contacts (props, route) {
    const handleHome = () => {
      props.history.push("/");
     }
    return (
      <div>
        <h2>Contacts!!!</h2>
        <button onClick={props.history.goBack}>Back</button>
        <button onClick={props.history.goForward}>Forward</button>
        <button onClick={handleHome}>Home</button>
        {renderRoutes(route.routes)}
      </div>
    )  
}


