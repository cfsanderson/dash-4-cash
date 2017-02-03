import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import withAuth from '../utils/withAuth'
import update from 'immutability-helper'
import CreateGroup from '../graphql/mutation/CreateGroup.gql'

@withAuth
@graphql(CreateGroup, { name: 'createGroup' })
class GroupNew extends Component {

  state = {
    newGroupName: ''
  }

  _createGroup = (e) => {
    e.preventDefault()
    this.props.createGroup({
      variables: {
        ownerId: this.props.client.userId,
        name: this.state.newGroupName
      },
      updateQueries: {
        UserOwnedGroups: (prev, { mutationResult }) => {
          const group = mutationResult.data.createGroup
          return update(prev, { user: { ownedGroups: { $push: [group] } } })
        }
      }
    })
    console.log('creating a group')
  }

  _newGroupNameChange = (e) => {
    this.setState({ newGroupName: e.target.value })
  }

  render () {
    return (
      <div>
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
