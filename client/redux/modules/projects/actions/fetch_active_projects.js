import * as types from '../types'
import axios from 'axios'

const query = `{
  activeProjects {
    _id
    count
    tags
    description
    status
    title
    age
    options {
      max_members
      language
      timezone
    }
    owner {
      _id
    }
  }
}`

export default function () {
  return dispatch => {
    return axios.post('/graphql', {query})
    .then(({ data }) => {
  
      dispatch({
        type: types.FETCH_PROJECTS,
        payload: data.data.activeProjects
      })
    })
    .catch(err => {
      return err;
    })
  }
}
