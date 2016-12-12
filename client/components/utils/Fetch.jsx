import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// actions
import { initialUserFetch } from '../../redux/modules/statics/initial_user_fetch'
import { checkIfAuthenticated } from '../../redux/modules/authentication/authentication'
//
export default function (ComposedComponent) {
  class Fetch extends Component {
    componentDidMount () {
      this.props.initialUserFetch()
      this.props.checkIfAuthenticated()
    }
    render () {
       return <ComposedComponent {...this.props} />
    }
  }

  return connect(null, { initialUserFetch, checkIfAuthenticated })(Fetch)
}
