import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
//import { MyContext } from './context-api/myContext';

//const value = {
//  name: 'Alex',
//  age: 30
//}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<MyContext.Provider value={value}>*/}
    <App />
    {/*</MyContext.Provider>*/}

  </React.StrictMode>
);


