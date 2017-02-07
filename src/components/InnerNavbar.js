import React, { Component } from 'react'
import { Link } from 'react-router'
import withAuth from '../utils/withAuth'

@withAuth
export default class InnerNavbar extends Component {

  static PropTypes = {
  }

  constructor () {
    super()
    this.state = {
      visible: false
    }
  }

  toggle () {
    this.setState({ visible: !this.state.visible })
  }

  profileInfo = () => {
    if (this.props.auth.isSignedIn) {
      return (
        <div className='profilePic'>
          <h5><Link to='/profile'>{this.props.auth.profile.name}</Link></h5>
          <Link to='/profile'><img src={this.props.auth.profile.picture} height={30} width={30} /></Link>
        </div>
      )
    }
    //  return (
    //   <div
    //     className='profilePic sign-in'
    //     onClick={() => this.props.auth.signIn()}>
    //     <h5>Sign in</h5>
    //     <i className='icon fa fa-user' aria-hidden='true' />
    //   </div>
    // )
  }

  _signOut = (event) => {
    event.preventDefault()
    this.props.auth.signOut()
  }

  render () {
    return (
      <div className='navBar innerNav'>
        <button className={`menu ${this.state.visible ? 'hidden' : ''}`} onClick={() => this.toggle()}>
          <i className='fa fa-bars' aria-hidden='true' />
        </button>
        <nav className={this.state.visible ? '' : 'hidden'}>
          <ul>
            <li>
              <button className='menu' onClick={() => this.toggle()}>
                <i className='fa fa-times' aria-hidden='true' />
              </button>
            </li>
            <li>
              <Link to='/profile'>My Profile</Link>
              <i className='icon fa fa-user' aria-hidden='true' />
            </li>
            <li>
              <Link to='/mygroups'>My Groups</Link>
              <i className='icon fa fa-users' aria-hidden='true' />
            </li>
            <li className='small-items'>
              <Link to='/about'>About</Link>
              <i className='icon fa fa-commenting' aria-hidden='true' />
            </li>
            <li className='small-items'>
              <Link to='/contact'>Contact</Link>
              <i className='icon fa fa-envelope' aria-hidden='true' />
            </li>
            <li className='small-items'>
              <Link to='/help'>Help</Link>
              <i className='icon fa fa-question-circle' aria-hidden='true' />
            </li>
            <li className='small-items'>
              <a onClick={this._signOut}>Log Out</a>
              <i className='icon fa fa-sign-out' aria-hidden='true' />
            </li>
          </ul>
        </nav>
        {this.profileInfo()}
      </div>
    )
  }
}
