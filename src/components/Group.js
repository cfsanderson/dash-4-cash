import React, { Component } from 'react'
import InnerNavbar from './InnerNavbar'
import InnerFooter from './InnerFooter'
import MyDonations from './MyDonations'

import LeaderBoard from './LeaderBoard'
import { graphql } from 'react-apollo'

import { queryGroup } from '../graphql'

@graphql(...queryGroup({
  options: props => ({ variables: { id: props.params.id } })
}))
export default class Group extends Component {

  groupHeader () {
    if (this.props.queryGroup.loading) return '...'
    return this.props.queryGroup.Group.name
  }

  leaderboard () {
    const { loading, Group } = this.props.queryGroup

    if (loading) {
      return <h1>Loading...</h1>
    } else {
      return <LeaderBoard members={Group.memberships} />
    }
  }

  render () {
    return (
      <div className='container'>
        <InnerNavbar />
        <div className='inner'>
          <header className='group'>
            <h1>{this.groupHeader()}</h1>
          </header>
          <div className='lower'>
            <MyDonations />
            {this.leaderboard()}
          </div>
        </div>
        <InnerFooter />
      </div>
    )
  }
}
