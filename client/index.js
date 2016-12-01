import React from 'react';
import { render } from 'react-dom';

// local import
import Root from './store'

/*
 * Render the root node as the store composed with the router;
 */
render (
  <Root />,
  document.getElementById('app')
)
