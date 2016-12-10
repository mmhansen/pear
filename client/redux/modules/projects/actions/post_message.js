import axios from 'axios'
import { browserHistory } from 'react-router'

// mutation
const query = `
  mutation ($message: String!, $projectID: ID!) {
    send_message(
      projectID: $projectID,
      text: $message
    )
  }`


export default function ({ message, projectID }) {
  const variables = {
    message,
    projectID
  }
  return dispatch => {
    return axios.post('graphql', {query, variables})
      .then((res) => {
        
        browserHistory.push('/projects')
      })
      .catch((res) => {
        console.log(res)
      })
  }
}
