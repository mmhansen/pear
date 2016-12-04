import axios from 'axios'
import { browserHistory } from 'react-router'
import * as types from './types'
import { tagList } from '../components/utils/tag_list'


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



export function newProject ({ title, description, tags, communication = "", timezone = "" }) {

  if (!title || !description || !tags) {
    return {
      type: types.FORM_ERROR,
      payload: 'Title, description, and tags are required fields'
    }
  } else {
    tags = tags.map(a => a.text)

    const variables = {
      title,
      description,
      tags,
      timezone,
      communication
    }
    const mutation = `mutation ($title: String!, $description: String!, $tags: [String]!, $timezone: String!, $communication: String!) {
      new_project(data: {
        title: $title,
        description: $description,
        tags: $tags,
        status: "Active",
        options: {
          language: $communication,
          timezone: $timezone,
          max_members: 4
        }
      }) {
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
            language
            timezone
            max_members
          }
        }
      }
    }`

    return dispatch => {
      return axios.post('/graphql', { query: mutation, variables })
      .then(({ data }) => {
        //console.log(data.data)
        dispatch ({
          type: types.CLEAR_FORM
        })
        browserHistory.push('/')
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}


export function fetchProjectsById (idArray) {

  return dispatch => {
    let query = `query ($idArray: [ID]){
      projects_by_ids(ids: $idArray)
    {
        _id
        participants {
          owner {
            _id
          }
          count
        }
        details {
          title
          description
          tags
          age
          options {
            language
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

export function handleTagDelete(i, tags) {
  tags.splice(i, 1);
  return  {
    type: types.DELETE_TAG,
    payload: tags
  }
}
export function handleTagAddition(tag, tags) {
  // if (tagList.indexOf(tag) < 0) {
  //   return {
  //     type: 'null'
  //   }
  // }

  return {
    type: types.ADD_TAG,
    payload: {
      id: tags.length + 1,
      text: tag
    }
  }
}
export function handleTagDrag(tag, currPos, newPos, tags) {

  // mutate array
  tags.splice(currPos, 1);
  tags.splice(newPos, 0, tag);

  // re-render
  return  {
    type: types.DRAG_TAG,
    payload: tags
  }
}

export function emptyForm () {
  return {
    type: types.CLEAR_FORM
  }
}
