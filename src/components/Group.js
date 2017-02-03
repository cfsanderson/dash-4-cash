import React, { Component } from 'react'
import InnerNavbar from './InnerNavbar'
import InnerFooter from './InnerFooter'
import MyDonations from './MyDonations'
import MyGroupsDonations from './MyGroupsDonations'
import DonateModal from './DonateModal'

export default class Group extends Component {

  state = {
    visible: false
  }

  modalToggle = () => {
    this.setState({ visible: !this.state.visible })
    console.log('modal')
  }

  render () {
    return (
      <div>
        <InnerNavbar />
        <div className='inner'>
          <header className='group'>
            <h1>Bradenton Runner's Club</h1>
          </header>

          <div className='lower'>
            <ul className='donations-ul'>
              <li className='donations' >
                <div>
                  <h3>My Donations</h3>
                  <MyDonations />
                </div>
              </li>
              <li className='donations' >
                <div>
                  <h3>Group Donations</h3>
                  <MyGroupsDonations />
                </div>
              </li>
              <li>
                <a className='donate-button'
                  role='button'
                  onClick={this.modalToggle}>
                  <span>Donate</span>
                  <div className='icon'>
                    <i className='fa fa-money' />
                  </div>
                </a>
              </li>
            </ul>

            <table>
              <tbody>
                <tr>
                  <th>Leaderboard</th>
                </tr>
                <tr>
                  <td>Caleb Sanderson</td>
                  <td>progress bar here</td>
                </tr>
                <tr>
                  <td>Group name B</td>
                  <td><button>+ Members</button></td>
                </tr>
                <tr>
                  <td>Group name C</td>
                  <td><button>+ Members</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className={`modal ${this.state.visible ? 'overlay' : 'hidden'}`}>
          <h2>Donate!</h2>
          <ul>
            <li>Amount</li>
            <li>My Groups</li>
            <li>Payment Info</li>
            <li>Submit Button</li>
          </ul>
        </div> */}
        <DonateModal />
        <InnerFooter />
      </div>
    )
  }
}
