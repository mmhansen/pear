import React, { Component, PropTypes } from 'react'
import Navbar from './Navbar'
import { connect } from 'react-redux'
import { authCheck } from '../actions/authentication_actions'

class Container extends Component {
  componentDidMount(){
    this.props.authCheck()
  }
  render () {
    let { children } = this.props
    return (
      <div>
        <Navbar />
         { children }
      </div>
    )
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  authCheck: PropTypes.func.isRequired
}

export default connect(null, { authCheck })(Container);
