import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
require('./stylesheets/styles.scss')
// hot module reloader throws an error without this
if (module.hot) {
  module.hot.accept();
}

render (
  <App />,
  document.getElementById('app')
)
