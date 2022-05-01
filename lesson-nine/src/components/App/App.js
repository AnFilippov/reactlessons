import React from 'react';
import './App.css';
import ErrorBoundary from '../ErrorBoundary';
import ErrorTest from '../ErrorTest';
import ErrorPage from '../ErrorPage';
import { Link, Route } from 'react-router-dom'

const Home = () => {
  return (
    <h2>
      Home
    </h2>
  )
}

const About = () => {
  return (
    <h2>
      About
    </h2>
  )
}

const Main = () => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contacts">Contacts</Link></li>
    </ul>
  )
}


function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <ErrorTest />
        <ErrorPage>
          <Main />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />

        </ErrorPage>
      </ErrorBoundary>

    </div>
  );
}

export default App;
