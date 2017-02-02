import React, { Component } from 'react'
import { Link } from 'react-router'

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
    console.log('toggle')
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
              <i className='icon fa fa-users' aria-hidden='true' /></li>
            <li>
              <Link to='/help'>Help</Link>
              <i className='icon fa fa-question-circle' aria-hidden='true' />
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
              <i className='icon fa fa-envelope' aria-hidden='true' />
            </li>
            <li>
              <Link to='/about'>About</Link>
              <i className='icon fa fa-commenting' aria-hidden='true' />
            </li>
            <li>
              <Link to='/'>Log Out</Link>
              <i className='icon fa fa-sign-out' aria-hidden='true' />
            </li>
          </ul>
        </nav>
        <div className='profilePic'>
          <h5><Link to='/profile'>Caleb Sanderson</Link></h5>
          <Link to='/profile'>
            <img src={require('../images/Caleb-copy.jpg')} height={30} width={30} />
          </Link>
        </div>
      </div>
    )
  }
}
