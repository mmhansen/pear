import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'


// parent
import Container from '../components/Container'
// routes
import Home from './Home'
import Mail from './Mail'
import Profile from './Profile'
import Projects from './Projects'
// utility/errors
import Logout from '../components/Logout'
import NotFound from './NotFound'


const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Container}>
        <IndexRoute component={Home} />

      </Route>
    </Router>
  )
}


export default Routes;


// <Route path="mail" component={Mail} />
// <Route path="profile" component={Profile} />
// <Route path="projects" component={Projects} />
// <Route path="logout" component={Logout} />
// <Route path="*" component={NotFound} />
