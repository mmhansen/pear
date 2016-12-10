import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// components
import Member from '../Member'
import ProjectMessage from '../ProjectMessage'
// actions
import { kickMember } from '../../redux/modules/projects'

// component
function ProjectMemberCard ({ myID, projects }) {
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
    // members
    let memberElements = a.members.map((b) => <Member key={b.username} data={b} /> )
    // messages
    let messageElements = a.messages.map((b,i) => <ProjectMessage key={i} data={b} />)


    // putting the pieces together
    return (
      <div key={a._id} className="project-card">
        <h4 className="strong">{a.title} by {a.owner.username}</h4>
        <p>{a.description}</p>
        <p>{a.age} days old</p>
        <p>{a.count}/{a.options.max_members} members</p>
        <hr />
        <h4>Message Board</h4>
        { messageElements }
        <hr />
        <h4>Members</h4>
        { memberElements }
        <button onClick={kickWithProjectID} name={myID}>Leave Project</button>
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
  const projects = state.user.projects_as_member
  return {
    myID,
    projects
  }
}
export default connect(mapStateToProps, null)(ProjectMemberCard)
