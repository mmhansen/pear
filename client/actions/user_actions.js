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


function fetchGql({ query_name }) {
  const query = `
  {
    ${query_name} {
      _id
      participants {
        count
        applicants {
          _id
          username
        }
        members {
          _id
          username
        }
      }
      details {
        title
        description
        tags
        status
        options {
          timezone
          language
          max_members
        }
      }
    }
  }`
  const type = query_name.toUpperCase()
  return function () {
    return dispatch => {
      return axios.post('/graphql', {query})
      .then((res) => {
        dispatch({
          type: types[type],
          name: query_name,
          payload: res.data.data[query_name]
        })
      })
      .catch((res) => {
        console.log(res)
      })
    }
  }
}

const projectsOwner = fetchGql({ query_name: 'projects_as_owner' })
const projectsMember = fetchGql({ query_name: 'projects_as_member' })
const projectsParticipant = fetchGql({ query_name: 'projects_as_applicant' })

export const fetchProjects = {
  projectsOwner,
  projectsMember,
  projectsParticipant  
}
