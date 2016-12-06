import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
// locals
import store from './redux/configureStore'
import Routes from './routes';
/*
 * Render the root node
 */
render (
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
)
