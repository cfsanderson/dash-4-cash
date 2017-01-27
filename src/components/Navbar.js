import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Navbar extends Component {

  static PropTypes = {
  }

  constructor () {
    super()
    this.state = {
      visible: false
      // categories: []
    }
  }

  toggle () {
    this.setState({ visible: !this.state.visible })
    console.log('toggle')
  }

  render () {
    // const categories = this.state.categories.map((category, i) => {
    //   return <li>
    //     <Link className='category-nav' to={'/c/' + category.name}>
    //       {category.name.toUpperCase()}
    //     </Link>
    //   </li>
    // })

    return (
      <div className='navBar'>
        <nav className={this.state.visible ? '' : 'hidden'}>
          <ul>
            <li>
              <button onClick={() => this.toggle()}>
                <i className='fa fa-window-close-o' aria-hidden='true' />
              </button>
            </li>
            <li>What is D4C?</li>
            <li>Donate</li>
            <li>Dash</li>
            <li>Track</li>
            <li>Get Started</li>
          </ul>
        </nav>
        <button className={`menu ${this.state.visible ? 'hidden' : ''}`} onClick={() => this.toggle()}>
          <i className='fa fa-bars' aria-hidden='true' />
        </button>
      </div>
    )
  }
}
