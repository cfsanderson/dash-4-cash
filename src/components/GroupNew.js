import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import withAuth from '../utils/withAuth'
import { mutationCreateGroup, queryUserOwnedGroups } from '../graphql'

@withAuth
@graphql(...mutationCreateGroup())
class GroupNew extends Component {

  state = {
    newGroupName: ''
  }

  _createGroup = (e) => {
    e.preventDefault()
    this.props.mutationCreateGroup({
      variables: {
        ownerId: this.props.client.userId,
        name: this.state.newGroupName
      },
      refetchQueries: [{query: queryUserOwnedGroups(false)}]
    })
    console.log('creating a group')
  }

  _newGroupNameChange = (e) => {
    this.setState({ newGroupName: e.target.value })
  }

  render () {
    return (
      <div className='createGroupInput'>
        <h2>Ready to start a new group?</h2>
        <p>Start here.</p>
        <form onSubmit={this._createGroup}>
          <input
            type='text'
            value={this.state.newGroupName}
            onChange={this._newGroupNameChange}
          />
          <button type='submit'>Create a Group</button>
        </form>
      </div>
    )
  }
}

export default GroupNew
