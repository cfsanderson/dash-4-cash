import React, { Component } from 'react'
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
  }

  render () {
    const ScrollAnimLink = ScrollAnim.Link

    return (
      // <div className={('Menu', { open: ui.menu })} onClick={this._dismissBg}>
      <div className='navBar'>
        <button className={`menu ${this.state.visible ? 'hidden' : ''}`} onClick={() => this.toggle()}>
          <i className='fa fa-bars' aria-hidden='true' />
        </button>
        <nav className={this.state.visible ? '' : 'hidden'}>
          <ul className='homeNavUl'>
            <li>
              <button className='menu' onClick={() => this.toggle()}>
                <i className='fa fa-times' aria-hidden='true' />
              </button>
            </li>
            <li>
              <ScrollAnimLink to='whatisD4C' onClick={() => this.toggle()}>What is D4C
                <i className='fa fa-question-circle' aria-hidden='true' />
              </ScrollAnimLink>
            </li>
            <li>
              <ScrollAnimLink to='donate' onClick={() => this.toggle()}>Donate
                <i className='fa fa-money' aria-hidden='true' />
              </ScrollAnimLink>
            </li>
            <li>
              <ScrollAnimLink to='dash' onClick={() => this.toggle()}>Dash
                <i className='fa fa-fast-forward' aria-hidden='true' />
              </ScrollAnimLink>
            </li>
            <li>
              <ScrollAnimLink to='track' onClick={() => this.toggle()}>Track
                <i className='fa fa-line-chart' aria-hidden='true' />
              </ScrollAnimLink>
            </li>
            <li>
              <ScrollAnimLink to='ready' onClick={() => this.toggle()}>Get Started
                <i className='fa fa-play' aria-hidden='true' />
              </ScrollAnimLink>
            </li>
          </ul>
        </nav>
      </div>
      // </div>
    )
  }
}
