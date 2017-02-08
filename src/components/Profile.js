import React, { Component } from 'react'
import InnerNavbar from './InnerNavbar'
import InnerFooter from './InnerFooter'
import MyDonations from './MyDonations'
import ProfileStats from './ProfileStats'
import DonateModal from './DonateModal'
import ui from '../ui'
import { graphql } from 'react-apollo'
import withAuth from '../utils/withAuth'

import {
  queryUserProfile,
  queryInvitations,
  mutationAcceptInvitation
} from '../graphql'

@withAuth
@graphql(...mutationAcceptInvitation())
@graphql(...queryUserProfile())
@graphql(...queryInvitations({
  options: props => ({ variables: { email: props.auth.profile.email } })
}))
export default class Profile extends Component {

  _showDonateModal = () => {
    ui.displayModal(<DonateModal />)
  }

  get mine () {
    const { loading, user } = this.props.queryUserProfile
    if (loading || !user) return 0
    return user.donations.reduce((amount, donation) => amount + donation.amount, 0)
  }

  get group () {
    const { loading, user } = this.props.queryUserProfile
    if (loading || !user) return 0
    return user.groups.reduce((amount, group) => amount + group.donations.reduce((amount, donation) => amount + donation.amount, 0), 0)
  }

  componentWillReceiveProps (nextProps) {
    const { loading, allInvitations } = nextProps.queryInvitations
    if (!loading) {
      allInvitations.forEach((invitation) => {
        this.props.mutationAcceptInvitation({
          variables: {
            userId: this.props.client.userId,
            invitationId: invitation.id,
            groupId: invitation.group.id
          },
          refetchQueries: [
            { query: queryUserProfile(false) }
          ]
        })
      })
    }
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
