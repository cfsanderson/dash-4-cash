import React, { Component } from 'react'
import Counter from './Counter'
import DonateModal from './DonateModal'
import ui from '../ui'

class MyDonations extends Component {

  _displayDonate = () => {
    ui.displayModal(<DonateModal />)
  }

  render () {
    return (
      <div>
        <ul className='donations-ul'>
          <li className='donations' >
            <div>
              <h3>My Donations</h3>

              {/* Need to input counter from user donations */}
              <Counter end={150} />
            </div>
          </li>
          <li className='donations' >
            <div>
              <h3>Group Donations</h3>

              {/* Need to input counter from user donations */}
              <Counter end={1227} />
            </div>
          </li>
          <li>
            <a className='donate-button'
              role='button'
              onClick={this._displayDonate}>
              <span>Donate</span>
              <div className='icon'>
                <i className='fa fa-money' />
              </div>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default MyDonations
