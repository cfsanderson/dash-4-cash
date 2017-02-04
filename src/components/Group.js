import React, { Component } from 'react'
import InnerNavbar from './InnerNavbar'
import InnerFooter from './InnerFooter'
import MyDonations from './MyDonations'
import DonateModal from './DonateModal'
import LeaderBoard from './LeaderBoard'
import { graphql } from 'react-apollo'

import UserOwnedGroups from '../graphql/query/UserOwnedGroups.gql'

@graphql(UserOwnedGroups, { name: 'userOwnedGroups' })
export default class Group extends Component {

  state = {
    donateVisible: false
  }

  donateModalToggle = () => {
    this.setState({
      donateVisible: !this.state.donateVisible
    })
  }

  groupHeader () {
    if (this.props.userOwnedGroups.loading) return <li>loading</li>
    return this.props.userOwnedGroups.user.ownedGroups.map((group, i) => {
      return (
        <div>{group.name}</div>
      )
    })
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
            <MyDonations toggle={this.donateModalToggle} />
            <LeaderBoard />
          </div>
        </div>
        <DonateModal visible={this.state.donateVisible} toggle={this.donateModalToggle} />
        <InnerFooter />
      </div>
    )
  }
}
