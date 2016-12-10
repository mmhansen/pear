import React, { PropTypes } from 'react'

function Member ({ data: { username }, owner, handleKick }) {
  return (
    <div className="project-participant">
      <p className="strong">{username}</p>
      { owner && <button onClick={handleKick}>Kick Member</button> }
    </div>
  )
}

export default Member
