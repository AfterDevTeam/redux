/**
 * ************************************
 *
 *
 * ************************************
 *
 * @format
 * @module index.js
 * @author
 * @date
 * @description entry point for application. Hangs React app off of #contents in index.html
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';

render(
  // This is the same regardless of Redux Method
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('contents')
);
