import React, { Component } from 'react'
import InnerNavbar from './InnerNavbar.js'
import InnerFooter from './InnerFooter'
import GroupNew from './GroupNew'

import { Link } from 'react-router'
import { graphql } from 'react-apollo'

import UserOwnedGroups from '../graphql/query/UserOwnedGroups.gql'

@graphql(UserOwnedGroups, { name: 'userOwnedGroups' })
export default class MyGroups extends Component {

  state = {
    visible: false
  }

  groupModalToggle = () => {
    this.setState({ visible: !this.state.visible })
    console.log('modal')
  }

  groups () {
    if (this.props.userOwnedGroups.loading) return <li>loading</li>
    return this.props.userOwnedGroups.user.ownedGroups.map((group, i) => {
      return (
        <li key={i}>
          <h3>{group.name}</h3>
          <p># members</p>
          <a className='add-members-button'
            role='button'
            onClick={this.groupModalToggle}>
            <span>Add Members</span>
            <div className='icon'>
              <i className='fa fa-plus' />
            </div>
          </a>
        </li>
      )
    })
  }

  render () {
    return (
      <div>
        <div className='inner'>
          <header className='myGroups'>
            <h1>My Groups</h1>
          </header>
          <div className='lower'>
            <div className='container'>
              <ul className='myGroups-ul'>
                {this.groups()}
              </ul>
            </div>
          </div>
        </div>

        <div className={`add-members-modal ${this.state.visible ? 'overlay' : 'hidden'}`}>
          <div className='add-members-scroll'>
            <div className='add-members-div'>
              <h2>Let's Dash!</h2>
              <p>Add members to the ______ group using the form below.</p>
              <form className='add-members-form'>
                <div className='add-members-fields'>
                  <h3>Personal Info</h3>
                  <p><input type='text' className='checkout-input checkout-name' placeholder='Name' /></p>
                  <p><input type='text' className='checkout-input checkout-name' placeholder='Email' /></p>
                  <textarea className='message' name='message' rows='10' cols='30'>Join our group on Dash 4 Cash and start running with purpose.</textarea>
                </div>
                <a className='submit-button'
                  role='button'
                  onClick={this.groupModalToggle}>
                  <span>Submit</span>
                  <div className='icon'>
                    <i className='fa fa-play' />
                  </div>
                </a>
              </form>
            </div>
          </div>
        </div>

        <GroupNew />
        <InnerFooter />
        <InnerNavbar />
      </div>
    )
  }
}
