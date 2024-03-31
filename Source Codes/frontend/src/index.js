import React from 'react';
import ReactDOM from 'react-dom/client';
import './bootstrap.min.css'
import './index.css';
import App from './App';
import { GlobalProvider } from './context/GlobalContext';
import { Provider } from 'react-redux'
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Provider>
  </React.StrictMode>
);