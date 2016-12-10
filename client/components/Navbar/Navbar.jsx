import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';

function Navbar ({ authenticated }) {

  const btnClass = "btn btn-default btn-lg"
  const authButtons = [
    <Link key="mail" className="" to='/mail'>Mail</Link>,
    <Link key="projects" className="" to='/projects'>Projects</Link>,
    <Link key="profile" className="" to='/profile'>Profile</Link>
  ]
  const guestButtons = [
    <a key="login" className="" href="/login/github">Login with Github</a>
  ]
  return (
    <div className="container-fluid">
      <div className="row navigation">
        <div className="col-sm-4 left-nav">
          <Link key="explore" className="" to='/'>Explore  <span className="glyphicon glyphicon-apple" aria-hidden="true"></span></Link>
        </div>
        <div className="col-sm-4 middle-nav">
          <Link key="home" className="" to="/">Pear!</Link>
        </div>
        <div className="col-sm-4 right-nav">
          { (authenticated) ? authButtons : guestButtons }
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
