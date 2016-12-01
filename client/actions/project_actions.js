import axios from 'axios'
import * as types from './types'


export function fetchActiveProjects () {
  return dispatch => {
    return axios.post('/graphql', {
      query: `
      {
      	activeProjects {
          _id
          details {
            title
            description
            tags
            options {
              lanuage
              timezone
            }
          }
        }
      }`
    })
    .then(({ data }) => {
      dispatch({
        type: types.ACTIVE,
        payload: data.data.activeProjects
      })
    })
    .catch(err => {
      return err;
    })
  }
}

export function primarySearch (payload) {
  return {
    type: types.PRIMARY_SEARCH,
    payload
  }
}

export function secondarySearch (payload) {
  return {
    type: types.SECONDARY_SEARCH,
    payload
  }
}
