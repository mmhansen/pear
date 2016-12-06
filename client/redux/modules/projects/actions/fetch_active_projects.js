import * as types from '../types'
import axios from 'axios'

const query = `{
  activeProjects {
    ...projectInfo
  }
}

fragment projectInfo on Project {
  _id
  owner
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
