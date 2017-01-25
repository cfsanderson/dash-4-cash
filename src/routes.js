import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Profile from './components/Profile'
import Groups from './components/Groups'
import MyGroup from './components/MyGroup'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='profile' component={Profile} />
      <Route path='groups/:slug' component={MyGroup} />
      <Route path='groups' component={Groups} />
    </Route>
  </Router>
)

export default routes
