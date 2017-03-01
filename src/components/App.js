import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import withAuth from '../utils/withAuth'
import { ApolloProvider } from 'react-apollo'

import Layout from './Layout'
import Home from './Home'
import Profile from './Profile'
import Group from './Group'
import MyGroups from './MyGroups'
import Help from './Help'
import Contact from './Contact'
import About from './About'

console.log(Component)

@withAuth
class App extends Component {

  requireAuth = (nextState, replace) => {
    if (!this.props.auth.isSignedIn) {
      replace({ pathname: '/' })
    }
  }

  unAuthed = (nextState, replace) => {
    if (this.props.auth.isSignedIn) {
      replace({ pathname: '/profile' })
    }
  }

  render () {
    return (
      <ApolloProvider client={this.props.client.apollo}>
        <Router
          onUpdate={() => window.scrollTo(0, 0)}
          history={browserHistory}>
          <Route path='/' component={Layout}>
            <IndexRoute component={Home} onEnter={this.unAuthed} />
            <Route path='profile' component={Profile} onEnter={this.requireAuth} />
            <Route path='mygroups' component={MyGroups} />
            <Route path='mygroups/:id' component={Group} />
            <Route path='help' component={Help} />
            <Route path='contact' component={Contact} />
            <Route path='about' component={About} />
          </Route>
        </Router>
      </ApolloProvider>
    )
  }
}

export default App
