import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store/index';
import './index.css';
import ScrollToTop from '@components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
 <Provider store={store}>
    <BrowserRouter>
    <ScrollToTop/>
      <App />
    </BrowserRouter>
  </Provider>
  </React.StrictMode>
 
);
