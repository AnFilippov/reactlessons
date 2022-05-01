import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError', { error });
    return { hasError: true }
  }

  //componentDidCatch(error, errorInfo) {
  //  console.log('componentDidCatch', { error, errorInfo });
  //}

  render() {

    if (this.state.hasError) {
      return <h2>something went wrong</h2>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;