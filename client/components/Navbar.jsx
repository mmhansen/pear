import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router';

function Navbar ({ authenticated }) {

  const btnClass = "btn btn-default btn-lg"

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 navigation">
          <Link className={btnClass} to='/'>Explore  <span className="glyphicon glyphicon-apple" aria-hidden="true"></span></Link>
          {
            (authenticated) && <Link className={btnClass} to='/new'>Start a project</Link>
          }
          {
            (authenticated) ? <Link className={`${btnClass} right`} to='/me'>Me</Link> : <a className={`${btnClass} right`} href="/login/github">Login with Github</a>
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
