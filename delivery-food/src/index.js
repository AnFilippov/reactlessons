import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reducer from './redux-store/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const store = createStore(reducer)

window.store = store;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
);


