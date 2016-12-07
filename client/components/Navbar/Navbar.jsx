import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';

function Navbar ({ authenticated }) {

  const btnClass = "btn btn-default btn-lg"
  const authButtons = [
    <Link key="mail" className={`${btnClass} right`} to='/mail'>Mail</Link>,
    <Link key="projects" className={`${btnClass} right`} to='/projects'>Projects</Link>,
    <Link key="profile" className={`${btnClass} right`} to='/profile'>Profile</Link>
  ]
  const guestButtons = [
    <a key="login" className={`${btnClass} right`} href="/login/github">Login with Github</a>
  ]
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 navigation">
          <Link key="explore" className={btnClass} to='/'>Explore  <span className="glyphicon glyphicon-apple" aria-hidden="true"></span></Link>
          {
            (authenticated) ? authButtons : guestButtons
          }
        </div>
      </div>
    </div>
  )
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authentication.authenticated
  }
}

export default connect(mapStateToProps, null)(Navbar);
