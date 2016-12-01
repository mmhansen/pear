import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class RequireAuth extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/au/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/au/login');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authentication.authenticated };
  }

  RequireAuth.contextTypes = {
    router: React.PropTypes.object
  }

  return connect(mapStateToProps)(RequireAuth);
}
