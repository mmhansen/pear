import axios from 'axios'
import * as types from '../types'
import { browserHistory } from 'react-router'

const query = `
  mutation (
    $title: String!,
    $description: String!,
    $tags: [String]!,
    $timezone: String!,
    $communication: String!
  ) {
    new_project(
      data: {
        title: $title,
        description: $description,
        tags: $tags,
        status: "Active",
        options: {
          language: $communication,
          timezone: $timezone,
          max_members: 4
        }
      }
    )
  }`

export default function ({ title, description, tags, communication, timezone }) {

    tags = tags.map(a => a.text)

    const variables = {
      title,
      description,
      tags,
      timezone,
      communication
    }

    return dispatch => {
      return axios.post('/graphql', { query, variables })
      .then(({ data }) => {

        browserHistory.push('/')
      })
      .catch(err => {
        console.log(err)
      })
    }

}
