import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { logout } from '../actions/authentication_actions'
import { connect } from 'react-redux'
import { fetchProjects } from '../actions/user_actions'

class UserPage extends Component {
  componentDidMount () {
    this.props.projectsOwner()
    this.props.projectsMember()
    this.props.projectsParticipant()
  }
  render () {
    let { children } = this.props
    let btnClass = "full-width btn"
    return (
      <div className="container-fluid main">
        <div className="row">
          <div className="col-sm-2">
            <div className="fixed-nav">
              <Link to="/me" className={btnClass+" btn-primary"}>Projects</Link>
              <Link to="/mail" className={btnClass+" btn-primary"}>Inbox</Link>
              <Link to="/settings" className={btnClass+" btn-primary"}>Settings</Link>
              <a href="/logout" onClick={() => {this.props.logout()}} className={btnClass+" btn-warning"}>Logout</a>
            </div>
          </div>
          <div className="col-sm-10">
            { children }
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { logout, ...fetchProjects })(UserPage);
