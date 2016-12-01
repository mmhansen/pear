import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authentication from './authentication'
import projects from './projects'
/*
 * Each reducer get's a part of state corresponding to the keys listed here.
 */
export default combineReducers({
  authentication,
  projects,
  formReducer
})
