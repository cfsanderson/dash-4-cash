import React, { Component } from 'react'
// import { Link } from 'react-router'
import ScrollAnim from 'rc-scroll-anim'

export default class Navbar extends Component {

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
    const Link = ScrollAnim.Link

    return (
      <div className='navBar'>
        <nav className={this.state.visible ? '' : 'hidden'}>
          <ul>
            <li>
              <button onClick={() => this.toggle()}>
                <i className='fa fa-window-close-o' aria-hidden='true' />
              </button>
            </li>
            <li><Link to='whatisD4C'>What is D4C?</Link></li>
            <li><Link to='donate'>Donate</Link></li>
            <li><Link to='dash'>Dash</Link></li>
            <li><Link to='track'>Track</Link></li>
            <li><Link to='ready'>Get Started</Link></li>
          </ul>
        </nav>
        <button className={`menu ${this.state.visible ? 'hidden' : ''}`} onClick={() => this.toggle()}>
          <i className='fa fa-bars' aria-hidden='true' />
        </button>
      </div>
    )
  }
}
