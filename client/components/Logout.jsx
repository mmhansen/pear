import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { logout } from '../redux/modules/authentication'

class LogoutPage extends React.Component {
  componentDidMount() {
    this.props.logout()
    browserHistory.push('/')
  }

  render() {
    return null
  }
}

export default connect(null, { logout })(LogoutPage)
