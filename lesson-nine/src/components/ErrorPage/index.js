import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

class ErrorPage extends React.Component {


  render() {
    if (this.props.children === undefined) {
      throw new Error('My error');
    }
    return (
      <Router>
        {this.props.children}
      </Router>
    )
  }

}

export default ErrorPage;