import React from "react";
import { renderRoutes } from 'react-router-config';


export function HomePage(route) { 
   return (
     <h2>     
       Home Page!!!!
       {renderRoutes(route.routes)}
     </h2>

   )
 
}

