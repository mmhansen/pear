const query = `mutation ($projectID: ID!, $userID: ID!) {
  leave_project(
    projectID: $projectID,
    userID: $userID
  )
}`
