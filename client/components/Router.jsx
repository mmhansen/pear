import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Container from './Container'
import Main from './Main'
import NewProject from './NewProject'
import User from './User'
import Logout from './Logout'
import Projects from './Projects'
import MailRoom from './MailRoom'
import UserSettings from './UserSettings'
import Conversation from './Conversation'

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Container}>
        <IndexRoute component={Main} />
        <Route path="new" component={NewProject} />
        <Route path="me" component={User}>
          <IndexRoute component={Projects} />
          <Route path="/mail" component={MailRoom} />
          <Route path="/mail/:id" component={Conversation} />
          <Route path="/settings" component={UserSettings} />
        </Route>
        <Route path="logout" component={Logout} />
      </Route>
    </Router>
  )
}

export default Routes;
