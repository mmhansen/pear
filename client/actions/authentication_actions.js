import axios from 'axios'
import { browserHistory } from "react-router"
import cookie from 'react-cookie'
/*
 * Import all actions
 */
import * as types from './types'

/*
 * Handle user logout requests
 * unuath the user in state and remove their cookie
 * TODO
 * this should also invalidate their token somehow.
 */
export function logout () {
  cookie.remove('user')
  return {
    type: types.UNAUTH_USER
  }
}
/*
 * Get the user data and save it in memory with react-cookie
 */
export function authCheck () {

  let query = `
  {
    me {
      _id
      username
    }
  }`

  return dispatch => {
    return axios.post('/graphql', {query})
      .then(({ data }) => {
        cookie.save('user', data.data.me, { path: '/'})
        // if we find an error, abort
        if (Object.keys(data).indexOf('errors') > 0) {
          return;
        }
        // if we dont find an error, auth me!
        dispatch({
          type: types.AUTH_USER
        })

      })
      .catch((err) => {
        console.log(err)
      })
  }
}
