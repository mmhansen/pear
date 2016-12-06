import axios from 'axios'
import { browserHistory } from 'react-router'
import * as types from '../types'

const query = `mutation
  ($language: String!, $timezone: String!) {
  user_options(language: $language, timezone: $timezone)
}`
/*
 *
 */


export default function ({ language, timezone }) {

  const variables = {
    language,
    timezone
  }

  return dispatch => {
    return axios.post('/graphql', {query, variables})
      .then((res) => {
        browserHistory.push('/me')
      })
      .catch((res) => {
        console.log(res)
      })
  }
}
