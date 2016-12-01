import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers'
import cookie from 'react-cookie'
/*
 * create the application state (store) with the combined reducers
 * apply thunk middleware to redux so we can send promises as actions
 */
const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk)(createStore)(rootReducer, devtools);


/*
 * Check whether a user is logged in or not when the page loads
 * We check the cookies for id_token
 */



if (false) {
  store.dispatch({ type: 'AUTH_USER' });
}

/*
 *
 */
import React from 'react';
import Routes from '../components/Router';

function ReduxStore () {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default ReduxStore;
