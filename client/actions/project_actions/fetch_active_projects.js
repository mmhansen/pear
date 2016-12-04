import * as types from '../types'

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
        type: types.ACTIVE,
        payload: data.data.activeProjects
      })
    })
    .catch(err => {
      return err;
    })
  }
}
