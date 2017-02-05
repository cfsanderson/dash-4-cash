import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import withAuth from '../utils/withAuth'
import { mutationCreateMembership, queryUserOwnedGroups } from '../graphql'

@withAuth
@graphql(...mutationCreateMembership())
class AddMembersModal extends Component {

  state = {
    newMemberName: '',
    newMemberEmail: ''
  }

  _addMember = (e) => {
    e.preventDefault()
    this.props.mutationCreateMembership({
      variables: {
        ownerId: this.props.client.userId,
        name: this.state.newGroupName
      },
      refetchQueries: [{query: queryUserOwnedGroups(false)}]
    })
    console.log('creating a new member')
  }

  _newMemberNameChange = (e) => {
    this.setState({
      newMemberName: e.target.value
    })
  }

  render () {
    return (
      <div className='add-members-div'>
        <h2>Let's Dash!</h2>
        <form className='add-members-form'>
          <div className='add-members-fields'>
            <h3>Personal Info</h3>
            {this.props.id}
            <p>
              <input
                type='text'
                className='checkout-input checkout-name'
                placeholder='Name'
                name=''
              />
            </p>
            <p>
              <input
                type='text'
                className='checkout-input checkout-name'
                placeholder='Email'
              />
            </p>
            <textarea
              value=''
              className='message'
              name='message'
              rows='10'
              cols='30'
              onChange={console.log('?')}
            />
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
    )
  }
}

export default AddMembersModal
