import React, { Component } from 'react'
import InnerNavbar from './InnerNavbar'
import InnerFooter from './InnerFooter'
import MyDonations from './MyDonations'
import ProfileStats from './ProfileStats'
import DonateModal from './DonateModal'
import ui from '../ui'

export default class Profile extends Component {

  _showDonateModal = () => {
    ui.displayModal(<DonateModal />)
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
              <MyDonations toggle={this._showDonateModal} />
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
