import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Container from './Container'
import Main from './Main'
import NewProject from './NewProject'
import Logout from './Logout'

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Container}>
        <IndexRoute component={Main} />
        <Route path="/new" component={NewProject} />
        <Route path="/logout" component={Logout} />
      </Route>
    </Router>
  )
}

export default Routes;
