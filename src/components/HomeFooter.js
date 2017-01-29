import React, { Component } from 'react'
// import { Link } from 'react-router'
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
      <div>
        <h2>This is the Home Footer</h2>
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
              <li>Help</li>
              <li>Download on Apple App Store</li>
              <li>Download on Google Play</li>
            </ul>
          </div>
        </footer>
      </div>
    )
  }
}
