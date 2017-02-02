import React, { Component } from 'react'

class Counter extends Component {

  state = {
  }
  // <div className={`donateModal ${this.state.visible ? 'overlay' : 'hidden'}`}>

  render () {
    return (
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
    )
  }
}

export default Counter
