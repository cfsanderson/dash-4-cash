import React, { Component } from 'react'
import { Link } from 'react-router'
import googleButton from '../images/buttons/googleplaybutton.png'
import appleButton from '../images/buttons/appstore_button_iphone.gif'
import withAuth from '../utils/withAuth'

@withAuth
export default class InnerFooter extends Component {

  _signOut = (event) => {
    event.preventDefault()
    this.props.auth.signOut()
  }

  render () {
    return (
      <div className='footerStyle'>
        <footer>
          <div className='footer-list'>
            <h2><Link to='/' >Dash 4 Cash</Link></h2>
            <h5>&copy; 2017 Caleb Frost Sanderson</h5>
          </div>
          <div>
            <div className='footer-list'>
              <h3>Menu</h3>
              <ul>
                <li><Link to='/profile' >My Profile</Link></li>
                <li><Link to='/mygroups' >My Groups</Link></li>
                <li><Link to='/help' >Help</Link></li>
                <li><Link to='/contact' >Contact</Link></li>
                <li><Link to='/about' >About</Link></li>
                <li onClick={this._signOut}><Link to='/' >Log Out</Link></li>
              </ul>
            </div>
          </div>
          <div>
            <div className='footer-list'>
              <h3>Follow</h3>
              <ul>
                <li>
                  <a href='https://www.facebook.com/caleb.f.sanderson' target='_blank'>
                    <i className='fa fa-facebook' aria-hidden='true' />
                  Facebook
                  </a>
                </li>
                <li>
                  <a href='https://twitter.com/cfsanderson' target='_blank'>
                    <i className='fa fa-twitter' aria-hidden='true' />
                  Twitter
                  </a>
                </li>
                <li>
                  <a href='https://www.instagram.com/cfsanderson/' target='_blank'>
                    <i className='fa fa-instagram' aria-hidden='true' />
                  Instagram
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/calebsanderson/' target='_blank'>
                    <i className='fa fa-linkedin' aria-hidden='true' />
                  LinkedIn
                  </a>
                </li>
                <li>
                  <a href='https://github.com/cfsanderson' target='_blank'>
                    <i className='fa fa-github' aria-hidden='true' />
                  GitHub
                  </a>
                </li>
                <li>
                  <a href='https://medium.com/@cfsanderson' target='_blank'>
                    <i className='fa fa-medium' aria-hidden='true' />
                  Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className='footer-list'>
              <h3>Go Mobile</h3>
              <ul>
                <li className='store-buttons'><img src={googleButton} alt='Google Play Store button' width='100px' height='30px' /></li>
                <li><img src={appleButton} alt='App Store button image' width='100px' height='30px' /></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
