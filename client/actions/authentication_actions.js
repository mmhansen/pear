import axios from 'axios'
import cookie from "react-cookie"
import { browserHistory } from "react-router"

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

  const user = cookie.load('user')

  if (user) {
    return null;
  } else {
    return dispatch => {
      return axios.post('/graphql', {
        query: `
        {
          me {
            _id
            username
          }
        }`
      })
        .then(({ data }) => {
          cookie.save('user', data.data.me)
          dispatch({
            type: types.AUTH_USER
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
