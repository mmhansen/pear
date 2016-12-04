import axios from 'axios'
import { browserHistory } from 'react-router'
import * as types from '../types'

const query = `{
  me {
    _id
    username
    timezone
    language
    mail {
      modified
      parties {
        _id
        username
      }
      conversation {
        to
        from
        body
      }
    }
    projects_as_owner {
      ...projectInfo
    }
    projects_as_member {
      ...projectInfo
    }
    projects_as_applicant {
      ...projectInfo
    }
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


/*
 *
 */
export default function () {

  return dispatch => {
    return axios.post('/graphql', {query})
      .then((res) => {
        // if we find an error, abort
        if (Object.keys(res).indexOf('errors') > 0) {
          return;
        }
        // if we dont find an error, auth me!, and stash info in user state
        dispatch({
          type: types.AUTH_USER
        })
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
