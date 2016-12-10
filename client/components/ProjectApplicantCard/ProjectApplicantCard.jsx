import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// actions


// component
function ProjectApplicantCard ({ myID, projects }) {
  // handle Leave
  function handleKick() {
    return
  }
  // presentational elements
  let childElements = projects.map((a) => {

    return (
      <div key={a._id} className="project-card">
        <h4 className="strong">{a.title} by {a.owner.username}</h4>
        <p>{a.description}</p>
        <p>{a.age} days old</p>
        <p>{a.count}/{a.options.max_members} members</p>
        <hr />
        <button onClick={handleKick}>Leave Project</button>
      </div>
    )
  })
  return (
      <div>
        {childElements}
      </div>
  )
}

const mapStateToProps = (state) => {
  const myID = state.user._id;
  const projects = state.user.projects_as_applicant
  return {
    myID,
    projects
  }
}

export default connect(mapStateToProps, null)(ProjectApplicantCard)
