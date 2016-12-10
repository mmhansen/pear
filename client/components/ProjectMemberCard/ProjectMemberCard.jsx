import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// actions


// component
function ProjectMemberCard ({ myID, projects }) {
  // handle Leave
  function handleKick() {
    return
  }
  // presentational elements
  let childElements = projects.map((a) => {

    // members
    let memberElements = a.members.map((b) => <Member key={b.username} data={b} handleKick={handleKick} /> )
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
        <textarea rows={5} placeholder="send messages about project details to the members of the project" value={""}/>
        <button className="block-elem" onClick={handleSubmit}>Post message to your team</button>
        <hr />
        <h4>Members</h4>
        { memberElements }
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
  const projects = state.user.projects_as_member
  return {
    myID,
    projects
  }
}
export default connect(mapStateToProps, null)(ProjectMemberCard)
