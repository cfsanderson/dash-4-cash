import React, { Component } from 'react'
import { Link } from 'react-router'
// import ScrollAnim from 'rc-scroll-anim'
import googleButton from '../images/buttons/googleplaybutton.png'
import appleButton from '../images/buttons/appstore_button_iphone.gif'

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
        <footer>
          <div className='footer-list'>
            <h2>Dash 4 Cash</h2>
            <h5>&copy; 2017 Caleb Frost Sanderson</h5>
          </div>
          <div>
            <div className='footer-list'>
              <h4>Menu</h4>
              <ul>
                <li>About</li>
                <li>Blog</li>
                <li>Support</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div>
            <div className='footer-list'>
              <h4>Follow</h4>
              <ul>
                <li><a href='https://www.facebook.com/caleb.f.sanderson' target='_blank'>Facebook</a></li>
                <li><a href='https://twitter.com/cfsanderson' target='_blank'>Twitter</a></li>
                <li><a href='https://www.instagram.com/cfsanderson/' target='_blank'>Instagram</a></li>
                <li><a href='https://www.linkedin.com/in/calebsanderson/' target='_blank'>LinkedIn</a></li>
                <li><a href='https://github.com/cfsanderson' target='_blank'>GitHub</a></li>
              </ul>
            </div>
          </div>
          <div>
            <div className='footer-list'>
              <h4>Get Started</h4>
              <ul>
                <li>Sign Up</li>
                <li>Login</li>
                <li><Link to='/help' >Help</Link></li>
                <li className='store-buttons'><img src={googleButton} alt='Google Play Store button' width='100px' height='30px' /></li>
                <li className='store-buttons'><img src={appleButton} alt='App Store button image' width='100px' height='30px' /></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
