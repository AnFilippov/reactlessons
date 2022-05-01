import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

class ErrorPage extends React.Component {


  render() {

    return (
      <Router>
        {this.props.children}
      </Router>
    )
  }
}

export default ErrorPage;