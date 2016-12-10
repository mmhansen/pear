import React, { PropTypes } from 'react'

function Applicant ({ data: { username, _id }, owner, handleKick, handleApprove}) {

  return (
      <div className="project-participant">
        <p className="strong">{username}</p>
        { owner && <button onClick={handleKick} name={_id}>Decline</button> }
        { owner && <button onClick={handleApprove} name={_id}>Approve</button> }
      </div>
  )
}

export default Applicant
