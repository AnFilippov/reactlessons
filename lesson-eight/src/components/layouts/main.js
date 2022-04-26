import React from "react";
import Main from "../Main/Main";
import { renderRoutes } from 'react-router-config';

export const MainLayout = props => {
  return (
    <div>
    <aside>
    <nav><Main/></nav>
    </aside>
    
      <div>{renderRoutes(props.route.routes)}</div>
    </div>
    
  )

}