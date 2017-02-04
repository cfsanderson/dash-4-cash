import React, { Component } from 'react'
import InnerNavbar from './InnerNavbar'
import InnerFooter from './InnerFooter'
import MyDonations from './MyDonations'
import MyStats from './MyStats'
import DonateModal from './DonateModal'

export default class Profile extends Component {

  state = {
    donateVisible: false
  }

  donateModalToggle = () => {
    this.setState({
      donateVisible: !this.state.donateVisible
    })
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
              <MyDonations toggle={this.donateModalToggle} />
              <MyStats />
            </div>
          </div>
        </div>

        <DonateModal visible={this.state.donateVisible} toggle={this.donateModalToggle} />

        <InnerFooter />

        <InnerNavbar />
      </div>
    )
  }
}
