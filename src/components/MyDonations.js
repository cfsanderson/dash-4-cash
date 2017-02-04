import React, { Component } from 'react'
import Counter from './Counter'

class MyDonations extends Component {

  // const onComplete = () => {
  //   className='custom-count booya'
  // }

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
              onClick={this.props.toggle}>
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
