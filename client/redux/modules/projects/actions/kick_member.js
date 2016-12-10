import axios from 'axios'

const query = `
  mutation ($projectID: ID!, $userID: ID!) {
    leave_project(
      projectID: $projectID,
      userID: $userID
    )
  }`


export default function ({ projectID, userID }) {


  const variables = {
    projectID,
    userID
  }

  axios.post('/graphql', {query, variables})
    .then((res) => {

    })
    .catch((res) => {
      console.log(res)
    })
}
