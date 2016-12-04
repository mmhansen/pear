import axios from 'axios'
import { browserHistory } from 'react-router'
import * as types from './types'

export function updateUser({ _id, language, timezone }) {

  const query = `mutation
  ($_id: ID!, $language: String!, $timezone: String!) {
	user_options(_id: $_id, language: $language, timezone: $timezone) {
    _id
    username
    timezone
    language
  }
}`

  const variables = {
    _id,
    language,
    timezone
  }
  console.log(variables)

  return dispatch => {
    return axios.post('/graphql', {query, variables})
      .then((res) => {
        dispatch({
          type: types.GET_USER,
          payload: res.data.data.me
        })
        browserHistory.push('/me')
      })
      .catch((res) => {
        console.log(res)
      })
  }
}

export function getUser() {
  const query = `
  {
    me {
      _id
    username
    timezone
    language
    }
  }
  `
  return dispatch => {
    return axios.post('/graphql', {query})
      .then((res) => {

        dispatch({
          type: types.GET_USER,
          payload: res.data.data.me

        })
      })
      .catch((res) => {
        console.log(res)
      })
  }
}

export function handleUserOptions (event) {
  return {
    type: types.USER_OPTION,
    payload: event.target.value,
    name: event.target.name
  }
}
