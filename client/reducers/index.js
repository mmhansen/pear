import { combineReducers } from 'redux'
//
import authentication from './authentication'
import projects from './projects'
import form from './form'
import mail from './mail'
import user from './user'
/*
 * Each reducer get's a part of state corresponding to the keys listed here.
 */
export default combineReducers({
  authentication,
  user,
  projects,
  form
})
