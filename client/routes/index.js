import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'


// parent
import Container from '../components/Container'
// routes
import Home from './Home'
import Profile from './Profile'
import MailContainer from './Mail'
import ProjectContainer from './Projects'
// utility/errors
import Logout from '../components/utils/Logout'
import NotFound from './NotFound'
// children
import Mail from '../components/Mail'
import Projects from '../components/Projects'
import NewProject from '../components/NewProject'
// fetch data wrapper
import Fetch from '../components/utils/Fetch'
/*
 *
 */
const Routes = function () {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Container}>
        <IndexRoute component={Fetch(Home)} />
        //
        <Route path="mail" component={Fetch(MailContainer)}>
          <Route path=":id" component={Mail} />
        </Route>
        //
        <Route path="/projects" component={Fetch(ProjectContainer)}>
          <IndexRoute component={Projects} />
          <Route path="/new" component={NewProject} />
        </Route>
        //
        <Route path="/profile" component={Fetch(Profile)} />
        <Route path="/logout" component={Logout} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  )
}


export default Routes;
