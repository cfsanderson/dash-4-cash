import React, { Component } from 'react'
// import { Link } from 'react-router'
import ScrollAnim from 'rc-scroll-anim'

export default class HomeNavbar extends Component {

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
    const ScrollAnimLink = ScrollAnim.Link

    return (
      <div className='navBar'>
        <button className={`menu ${this.state.visible ? 'hidden' : ''}`} onClick={() => this.toggle()}>
          <i className='fa fa-bars' aria-hidden='true' />
        </button>
        <nav className={this.state.visible ? '' : 'hidden'}>
          <ul>
            <li>
              <button className='menu' onClick={() => this.toggle()}>
                <i className='fa fa-window-close-o' aria-hidden='true' />
              </button>
            </li>
            <li><ScrollAnimLink to='whatisD4C'>What is D4C?</ScrollAnimLink></li>
            <li><ScrollAnimLink to='donate'>Donate</ScrollAnimLink></li>
            <li><ScrollAnimLink to='dash'>Dash</ScrollAnimLink></li>
            <li><ScrollAnimLink to='track'>Track</ScrollAnimLink></li>
            <li><ScrollAnimLink to='ready'>Get Started</ScrollAnimLink></li>
          </ul>
        </nav>
      </div>
    )
  }
}
