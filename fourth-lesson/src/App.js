
import React from 'react';
import './App.css';
import Task1 from './components/Task1';
import Task2 from './components/Task2';

class App extends React.Component {
    constructor () {
        super();
        this.state = {
            isShow: true,
        }
    }
    render () {
        return (
            <div className="App">
            <button onClick={() => this.setState({isShow: !this.state.isShow})}>Click</button>
            {this.state.isShow && <Task1 />}
              <Task2  />
            </div>
          );
    }
 
}

export default App;
