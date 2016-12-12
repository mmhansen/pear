import { combineReducers } from 'redux'
//
import authentication from './modules/authentication/reducer'
import form from './modules/form/reducer'
import statics from './modules/statics/reducer'
/*
 * Each reducer get's a part of state corresponding to the keys listed here.
 */
export default combineReducers({
  authentication,
  form,
  statics
})
