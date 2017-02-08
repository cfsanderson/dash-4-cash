import React, { Component } from 'react'
import InnerNavbar from './InnerNavbar'
import InnerFooter from './InnerFooter'
import MyDonations from './MyDonations'
import LeaderBoard from './LeaderBoard'
import { graphql } from 'react-apollo'
import withAuth from '../utils/withAuth'

import { queryGroup } from '../graphql'

@withAuth
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
      return <LeaderBoard members={Group.users} />
    }
  }

  myDonations () {
    const { loading, Group } = this.props.queryGroup
    if (loading) return <MyDonations />

    const group = Group.donations.reduce((acc, donation) => acc + donation.amount, 0)
    const mine = Group.donations.filter((donation) => {
      return donation.user.id === this.props.client.userId
    }).reduce((acc, donation) => acc + donation.amount, 0)

    return <MyDonations mine={mine} group={group} />
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
            {this.myDonations()}
            {this.leaderboard()}
          </div>
        </div>
        <InnerFooter />
      </div>
    )
  }
}
