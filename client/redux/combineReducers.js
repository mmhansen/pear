import { combineReducers } from 'redux'
//
import authentication from './modules/authentication/reducer'
import projects from './modules/projects/reducer'
import form from './modules/form/reducer'
import user from './modules/user/reducer'
import mail from './modules/mail/reducer'
/*
 * Each reducer get's a part of state corresponding to the keys listed here.
 */
export default combineReducers({
  authentication,
  user,
  projects,
  form,
  mail
})
