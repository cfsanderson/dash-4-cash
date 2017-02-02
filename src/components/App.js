import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Layout from './Layout'
import Home from './Home'
import Profile from './Profile'
import Group from './Group'
import MyGroups from './MyGroups'
import Help from './Help'
import Contact from './Contact'
import About from './About'

class App extends Component {
  render () {
    return <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home} />
        <Route path='profile' component={Profile} />
        <Route path='mygroups' component={MyGroups} />
        <Route path='mygroups/:slug' component={Group} />
        <Route path='help' component={Help} />
        <Route path='contact' component={Contact} />
        <Route path='about' component={About} />
      </Route>
    </Router>
  }
}

export default App
