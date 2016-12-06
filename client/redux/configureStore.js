import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './combineReducers'
/*
 * create the application state (store) with the combined reducers
 * apply thunk middleware to redux so we can send promises as actions
 */
const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk)(createStore)(rootReducer, devtools);

export default store;
