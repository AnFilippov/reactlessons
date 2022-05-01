import React from "react";
import { Link } from "react-router-dom";
import { NavLink} from "react-router-dom";

class Main extends React.Component {
  render () {
    return (
      <ul>
        <li>
          <Link  to="/">Home Page</Link>
        </li>
        <li>
          <Link  to="/about">About</Link>
        </li>
        <li>
          <NavLink  to="/contacts">Contacts</NavLink>
        </li>
      </ul>
    )
  }
}

export default Main;