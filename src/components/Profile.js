import React, { Component } from 'react'
import InnerNavbar from './InnerNavbar'
import InnerFooter from './InnerFooter'
import MyDonations from './MyDonations'
import ProfileStats from './ProfileStats'
import DonateModal from './DonateModal'
import ui from '../ui'
import { graphql } from 'react-apollo'

import { queryUserProfile } from '../graphql'

@graphql(...queryUserProfile())
export default class Profile extends Component {

  _showDonateModal = () => {
    ui.displayModal(<DonateModal />)
  }

// auth.js "compare"
// app.js router "unauthed"

  get mine () {
    const { loading, user } = this.props.queryUserProfile
    if (loading) return 0
    return user.donations.reduce((amount, donation) => amount + donation.amount, 0)
  }

  get group () {
    const { loading, user } = this.props.queryUserProfile
    if (loading) return 0
    return user.groups.reduce((amount, group) => amount + group.donations.reduce((amount, donation) => amount + donation.amount, 0), 0)
  }

  render () {
    return (
      <div className='wrapper'>
        <div className='inner'>
          <header className='profile'>
            <h1>My Profile</h1>
          </header>

          <div className='lower profile-main'>
            <div className='container'>
              <MyDonations mine={this.mine} group={this.group} toggle={this._showDonateModal} />
              <ProfileStats />
            </div>
          </div>
        </div>
        <InnerFooter />

        <InnerNavbar />
      </div>
    )
  }
}
