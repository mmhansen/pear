import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

// Component
class Projects extends Component {
  render () {
    const btnClass = 'btn btn-large btn-primary project-link'
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1">
            <div className="project-nav">
              <Link to="/projects" className={btnClass}>Owner</Link>
              <Link to="/projects/member" className={btnClass}>Member</Link>
              <Link to="/projects/applicant" className={btnClass}>Applicant</Link>
              <Link to="/projects/new" className={btnClass}>Create!</Link>
            </div>
            <hr />
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, null)(Projects)
