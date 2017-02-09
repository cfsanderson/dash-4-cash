import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import withAuth from '../utils/withAuth'
import ui from '../ui'

import {
  mutationCreateInvitation,
  queryUserOwnedGroups
} from '../graphql'

@withAuth
@graphql(...mutationCreateInvitation())
class AddMembersModal extends Component {

  state = {
    newMemberName: '',
    newMemberEmail: ''
  }

  _addMember = (e) => {
    e.preventDefault()
    this.props.mutationCreateInvitation({
      variables: {
        groupId: this.props.id,
        name: this.state.newMemberName,
        email: this.state.newMemberEmail
      },
      refetchQueries: [{query: queryUserOwnedGroups(false)}]
    }).then(() => {
      ui.dismissModal()
    })
  }

  _changed = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div className='add-members-div'>
        <h2>Let's Dash!</h2>
        <form className='add-members-form' onSubmit={this._addMember}>
          <div className='add-members-fields'>
            <h3>Personal Info</h3>
            <p>
              <input
                type='text'
                className='checkout-input checkout-name'
                placeholder='Name'
                value={this.state.newMemberName}
                name='newMemberName'
                onChange={this._changed}
              />
            </p>
            <p>
              <input
                type='text'
                className='checkout-input checkout-name'
                placeholder='Email'
                value={this.state.newMemberEmail}
                name='newMemberEmail'
                onChange={this._changed}
              />
            </p>
            <textarea
              className='message'
              name='message'
              rows='10'
              cols='30'
              // onChange={console.log('?')}
            />
          </div>
          <a
            className='submit-button'
            role='button'
            onClick={this._addMember}>
            <span>Submit</span>
            <div className='icon'>
              <i className='fa fa-play' />
            </div>
          </a>
        </form>
      </div>
    )
  }
}

export default AddMembersModal
