import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getUser } from '../../redux/modules/user'

export default function (ComposedComponent) {
  class Fetch extends Component {
    componentDidMount () {
      this.props.getUser()
    }
    render () {
       return <ComposedComponent {...this.props} />
    }
  }

  return connect(null, { getUser })(Fetch)
}
