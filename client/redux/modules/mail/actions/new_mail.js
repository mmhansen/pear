import axios from 'axios'
import * as types from '../types'
import {browserHistory} from 'react-router'

const query = `mutation
  ($_id: ID!, $to: ID!, $body: String!, $subject: ID!) {
  new_conversation(_id: $_id, to: $to, body: $body, subject: $subject)
}`

export default function ({ _id, to, body, subject }) {
  const variables = {
    _id,
    to,
    body,
    subject
  }
  return dispatch => {
    return axios.post('/graphql', {query, variables})
    .then((res) => {
      browserHistory.push('/mail')
    })
    .catch((res) => {
      console.log(res)
    })
  }
}
