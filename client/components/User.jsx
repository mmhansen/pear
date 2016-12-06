import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { getUser } from '../actions/user_actions'
import { logOut } from '../actions/authentication_actions'

class UserPage extends Component {
  componentDidMount () {
    this.props.getUser()
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
              <a href="/logout" onClick={() => {this.props.logOut()}} className={btnClass+" btn-warning"}>Logout</a>
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

export default connect(null, { getUser, logOut })(UserPage);
