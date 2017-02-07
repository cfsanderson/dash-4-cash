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
          <ul className='homeNavUl'>
            <li>
              <button className='menu' onClick={() => this.toggle()}>
                <i className='fa fa-times' aria-hidden='true' />
              </button>
            </li>
            <li>
              <ScrollAnimLink to='whatisD4C'>What is D4C<i className='fa fa-question-circle' aria-hidden='true' />
              </ScrollAnimLink>
            </li>
            <li>
              <ScrollAnimLink to='donate'>Donate<i className='fa fa-money' aria-hidden='true' />
              </ScrollAnimLink>
            </li>
            <li>
              <ScrollAnimLink to='dash'>Dash<i className='fa fa-fast-forward' aria-hidden='true' />
              </ScrollAnimLink>
            </li>
            <li>
              <ScrollAnimLink to='track'>Track<i className='fa fa-line-chart' aria-hidden='true' />
              </ScrollAnimLink>
            </li>
            <li>
              <ScrollAnimLink to='ready'>Get Started<i className='fa fa-play' aria-hidden='true' />
              </ScrollAnimLink>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
