import React, { Component } from 'react'
import InnerNavbar from './InnerNavbar'
import InnerFooter from './InnerFooter'
import MyDonations from './MyDonations'
import MyGroupsDonations from './MyGroupsDonations'

export default class Profile extends Component {

  state = {
    visible: false
  }

  donateModalToggle = () => {
    this.setState({ visible: !this.state.visible })
    console.log('modal')
  }

  render () {
    return (
      <div>
        <div className='inner'>
          <header className='profile'>
            <h1>My Profile</h1>
          </header>

          <div className='lower profile-main'>
            <div className='container'>
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
                    onClick={this.donateModalToggle}>
                    <span>Donate</span>
                    <div className='icon'>
                      <i className='fa fa-money' />
                    </div>
                  </a>
                </li>
              </ul>

              {/* My Stats section */}
              <div className='myStats'>
                <h3>My Stats</h3>
                <div className='tables'>
                  <div className='miles'>
                    <h4>Miles</h4>
                    <p>Today: 5 miles</p>
                    <table className='miles-week'>
                      <tr>
                        <th>This Week</th>
                        <th>Last Week</th>
                      </tr>
                      <tr>
                        <td>25 miles</td>
                        <td>30 miles</td>
                      </tr>
                      <tr />
                    </table>
                    <table className='miles-month'>
                      <tr>
                        <th>This Month</th>
                        <th>Last Month</th>
                      </tr>
                      <tr>
                        <td>100 miles</td>
                        <td>130 miles</td>
                      </tr>
                      <tr />
                    </table>
                  </div>
                  <div className='minutes'>
                    <h4>Minutes</h4>
                    <p>Today: 35 minutes</p>
                    <table className='minutes-week'>
                      <tr>
                        <th>This Week</th>
                        <th>Last Week</th>
                      </tr>
                      <tr>
                        <td>105 minutes</td>
                        <td>230 minutes</td>
                      </tr>
                      <tr />
                    </table>
                    <table className='minutes-month'>
                      <tr>
                        <th>This Month</th>
                        <th>Last Month</th>
                      </tr>
                      <tr>
                        <td>1050 minutes</td>
                        <td>1500 minutes</td>
                      </tr>
                      <tr />
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`donateModal ${this.state.visible ? 'overlay' : 'hidden'}`}>
          <div className='donateScroll'>
            <div className='donate-div'>
              <h2>Donate!</h2>
              <form className='donate-form'>
                <div className='donate-fields'>
                  <h3>Billing Info</h3>
                  <p><input type='text' className='checkout-input checkout-name' placeholder='Your name' /></p>
                  <p><input type='text' className='checkout-input checkout-exp' placeholder='MM' /></p>
                  <p><input type='text' className='checkout-input checkout-exp' placeholder='YY' /></p>
                  <p><input type='text' className='checkout-input checkout-card' placeholder='4111 1111 1111 1111' /></p>
                  <p><input type='text' className='checkout-input checkout-cvc' placeholder='CVC' /></p>
                  <h3>Group</h3>
                  <p>
                    <select name='checkout-input group-select'>
                      <option value='bradenton'>Bradenton Runners Club</option>
                      <option value='stpete'>St. Pete Runners Club</option>
                      <option value='tiy'>The Iron Yard Runners</option>
                      <option value='sarasota'>Sarasota Runners Club</option>
                    </select>
                  </p>
                </div>
                <a className='submit-button'
                  role='button'
                  onClick={this.donateModalToggle}>
                  <span>Submit</span>
                  <div className='icon'>
                    <i className='fa fa-play' />
                  </div>
                </a>
              </form>
            </div>
          </div>
        </div>

        <InnerFooter />

        <InnerNavbar />
      </div>
    )
  }
}

/* <p><input type='submit' className='checkout-btn' value='Purchase' /></p>
<div>
  <span>Group</span>
  <select name='group-select'>
    <option value='bradenton'>Bradenton Runners Club</option>
    <option value='stpete'>St. Pete Runners Club</option>
    <option value='tiy'>The Iron Yard Runners</option>
    <option value='sarasota'>Sarasota Runners Club</option>
  </select>
</div>
<div className='form-row'>
  <label>
    <span>Card Number</span>
    <input type='text' size='20' />
  </label>
</div>

<div className='form-row'>
  <label>
    <span>Expiration (MM/YY)</span>
    <input type='text' size='2' />
  </label>
  <span> / </span>
  <input type='text' size='2' />
</div>

<div className='form-row'>
  <label>
    <span>CVC</span>
    <input type='text' size='4' />
  </label>
</div>

<div className='form-row'>
  <label>
    <span>Billing Postal Code</span>
    <input type='text' size='6' />
  </label>
</div> */
