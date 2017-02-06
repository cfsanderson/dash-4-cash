import React, { Component } from 'react'
import InnerNavbar from './InnerNavbar.js'
import InnerFooter from './InnerFooter'
import CreateNewGroup from './CreateNewGroup'
import AddMembersModal from './AddMembersModal'
import ui from '../ui'

import { Link } from 'react-router'
import { graphql } from 'react-apollo'

import { queryUserOwnedGroups } from '../graphql'

@graphql(...queryUserOwnedGroups())
export default class MyGroups extends Component {

  groupModalToggle = (id) => {
    ui.displayModal(<AddMembersModal id={id} />)
    console.log('modal')
  }

  addMembersToGroup = () => {
    console.log('add member form submitted')
  }

  groups () {
    if (this.props.queryUserOwnedGroups.loading) return <li>loading...</li>
    if (this.props.queryUserOwnedGroups.user.ownedGroups < 1) {
      return (
        <li>
          <h3 className='groupNameH3'>No groups :(</h3>
          <p>Check out the
            <Link to='/help'> Help </Link>
            page for more info.
          </p>
        </li>
      )
    } return this.props.queryUserOwnedGroups.user.ownedGroups.map((group, i) => {
      return (
        <li key={i}>
          <h3><Link className='groupNameH3' to={`/mygroups/${group.id}`}>{group.name}</Link></h3>
          {/* <div>
            <h2>Members</h2>
            <ul>
              {group.memberships.map((member, i) => {
                return <li key={i}>{member.name}</li>
              })}
            </ul>
          </div> */}
          <p>{group.memberships.length} Member(s)</p>
          <a className='add-members-button'
            role='button'
            onClick={() => this.groupModalToggle(group.id)}>
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
      <div className='wrapper'>

        {/* Basic page layout */}
        <div className='inner'>
          <header className='myGroups'>
            <h1>My Groups</h1>
          </header>
          <div className='lower'>
            <div className='container'>
              <div className='myGroups-container'>
                <CreateNewGroup />
                <ul className='myGroups-ul'>
                  {this.groups()}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <InnerFooter />
        <InnerNavbar />
      </div>
    )
  }
}
