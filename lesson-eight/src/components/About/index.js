import React from "react";
import { renderRoutes } from 'react-router-config';

export function About (route) {  
    return(
      <h2>
        About!!!
        {renderRoutes(route.routes)}
      </h2>
    )
  
}


