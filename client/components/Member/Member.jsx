import React, { PropTypes } from 'react'

function Member ({ data: { _id, username }, owner, handleKick }) {
  return (
    <div className="project-participant">
      <p className="strong">{username}</p>
      { owner && <button onClick={handleKick} name={_id}>Kick Member</button> }
    </div>
  )
}

export default Member
