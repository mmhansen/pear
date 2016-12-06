import * as types from '../types'
import { browserHistory } from 'react-router'

const query = `mutation
  (
    $title: String!,
    $description: String!,
    $tags: [String]!,
    $timezone: String!,
    $communication: String!
  ) {
    new_project(data: {
      owner: "58446a4691014260ad6a11e3",
      title: "Todo App",
      description: "A classic productivity app",
      status: "Active",
      tags: ["Javascript", "React"],
      options: {
        language: "English",
        timezone: "0:00",
        max_members: 4
      }
    })
  }`

export default function ({ title, description, tags, communication = "", timezone = "" }) {

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
