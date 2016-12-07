import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <h1>Profile</h1>

          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, null)(Profile)
