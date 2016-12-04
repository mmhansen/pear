import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

function UserSettings () {
  return (
    <div>
      <p>change spoken language</p>
      <p>change timezone</p>
    </div>
  )
}

export default connect(null, null)(UserSettings)
