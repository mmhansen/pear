import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// actions
import { kickMember } from '../../redux/modules/projects'


// component
function ProjectApplicantCard ({ myID, projects }) {
  // kick participant
  function handleKick(projectID) {
    return function(e) {
      e.preventDefault();
      kickMember({
        projectID,
        userID: e.target.name
      })
    }
  }
  // presentational elements
  let childElements = projects.map((a) => {

    const kickWithProjectID = handleKick(a._id)

    return (
      <div key={a._id} className="project-card">
        <h4 className="strong">{a.title} by {a.owner.username}</h4>
        <p>{a.description}</p>
        <p>{a.age} days old</p>
        <p>{a.count}/{a.options.max_members} members</p>
        <hr />
        <button onClick={kickWithProjectID} name={myID} >Leave Project</button>
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
