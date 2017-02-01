import React, { Component } from 'react'
import { Link } from 'react-router'
// import ScrollAnim from 'rc-scroll-anim'
import googleButton from '../images/buttons/googleplaybutton.png'
import appleButton from '../images/buttons/appstore_button_iphone.gif'

export default class InnerFooter extends Component {

  static PropTypes = {
  }

  // constructor () {
  //   super()
  //   this.state = {
  //     visible: false
  //   }
  // }

  render () {
    // const ScrollAnimLink = ScrollAnim.Link

    return (
      <div className='homeFooter'>
        {/* <h2>This is the Inner Footer</h2> */}
        <footer>
          <div>
            <h4>Menu</h4>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Support</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4>Follow</h4>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>YouTube</li>
              <li>GitHub</li>
            </ul>
          </div>
          <div>
            <h4>Get Started</h4>
            <ul>
              <li><Link to='/help' >Help</Link></li>
              <li className='store-buttons'><img src={googleButton} alt='Google Play Store button' width='100px' height='30px' /></li>
              <li className='store-buttons'><img src={appleButton} alt='App Store button image' width='100px' height='30px' /></li>
            </ul>
          </div>
        </footer>
      </div>
    )
  }
}
