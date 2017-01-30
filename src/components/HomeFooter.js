import React, { Component } from 'react'
import { Link } from 'react-router'
// import ScrollAnim from 'rc-scroll-anim'

export default class HomeFooter extends Component {

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
        <h2>Dash 4 Cash</h2>
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
              <li>Sign Up</li>
              <li>Login</li>
              <li><Link to='/help' >Help</Link></li>
              <li className='googlePlay'><img src='../images/googleplaybutton.png' alt='Google Play Store button' width='100px' height='30px' /></li>
              <li className='appStore'><img src='../images/appstore_button_iphone.png' alt='App Store button image' width='100px' height='30px' /></li>
            </ul>
          </div>
        </footer>
      </div>
    )
  }
}
