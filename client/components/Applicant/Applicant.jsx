import React, { PropTypes } from 'react'

function Applicant ({ data: { username }, owner, handleKick, handleApprove}) {

  return (
      <div className="project-participant">
        <p className="strong">{username}</p>
        { owner && <button onClick={handleKick}>Decline</button> }
        { owner && <button onClick={handleApprove}>Approve</button> }
      </div>
  )
}

export default Applicant
