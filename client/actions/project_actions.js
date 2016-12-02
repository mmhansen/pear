import axios from 'axios'
import { browserHistory } from 'react-router'
import * as types from './types'



export function fetchActiveProjects () {
  return dispatch => {
    let query = `{
              activeProjects
            }`

    return axios.post('/graphql', {query})
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

export function handleChange (event) {
  return {
    type: types.INPUT_CHANGE,
    payload: event.target.value,
    name: event.target.name
  }
}



export function newProject ({ title, description, tags, communication, timezone }) {

  const mutation = `mutation {
    new_project(data: {
      title: "${title}",
      description: "${description}",
      tags: ["Javascript"],
      status: "Active",
      options: {
        language: "English",
        timezone: "0",
        max_members: 4
      }
    }) {
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

  axios.post('/graphql', { query: mutation })
  .then(({ data }) => {
    //console.log(data.data)
    browserHistory.push('/')
  })
  .catch(err => {
    console.log(err)
  })
}


export function fetchProjectsById (idArray) {

  return dispatch => {
    let query = `query ($idArray: [ID]){
      projects_by_ids(ids: $idArray)
    {
        _id
        participants {
          count
        }
        details {
          title
          description
          tags
          age
          options {
            lanuage
            timezone
            max_members
          }
        }
      }
    }`

    let variables = {
      idArray
    }

    return axios.post('/graphql', {query, variables})
    .then(({ data }) => {
      dispatch({
        type: types.INSERT_PROJECT,
        payload: data.data.projects_by_ids
      })
    })
    .catch(err => {
      return err;
    })
  }
}
