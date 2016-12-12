import * as types from './types'
import { fetchAndInsert } from '../fetchHandler'

// action creator... creator
function authHanlder (type) {
  return function (value = false) {
    return {
      type,
      value
    }
  }
}
// logout action creator
export const logout = authHanlder(types.UNAUTH_USER)

// login query and action creator
const loginAttempt  = authHanlder(types.FETCH_AUTH)
const query =  `query {
    authenticated
  }`
const params = {
  callback: loginAttempt,
  query_name: 'authenticated',
  query
}
export const checkIfAuthenticated = fetchAndInsert(params)
