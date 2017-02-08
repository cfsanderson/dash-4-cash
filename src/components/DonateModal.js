import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router'
import ui from '../ui'
import withAuth from '../utils/withAuth'

import {
  mutationCreateDonation,
  queryGroup,
  queryUserProfile
} from '../graphql'

@withAuth
@withRouter
@graphql(...queryUserProfile())
@graphql(...mutationCreateDonation())
class DonateModal extends Component {

  submitDonation = () => {
    const { params } = this.props
    const refetchQueries = [
      params && params.id
        ? { query: queryGroup(false), variables: { id: params.id } }
        : { query: queryUserProfile(false) }
    ]

    this.props.mutationCreateDonation({
      variables: {
        userId: this.props.client.userId,
        groupId: this.refs.group.value,
        amount: parseInt(this.refs.amount.value),
        charity: this.refs.charity.value
      },
      refetchQueries
    }).then(() => {
      ui.dismissModal()
    })
  }

  get groupOptions () {
    const { loading, user } = this.props.queryUserProfile
    if (loading) return []
    return user.groups.map((group, i) => {
      return <option key={i} value={group.id}>{group.name}</option>
    })
  }

  render () {
    return (
      <div className='donateScroll'>
        <div className='donate-div'>
          <h2>Donate NOW!</h2>
          <form className='donate-form'>
            <h3>My Billing Info</h3>
            <div className='credit-cards'>
              <p><i className='fa fa-cc-paypal' aria-hidden='true' /></p>
              <p><i className='fa fa-cc-visa' aria-hidden='true' /></p>
              <p><i className='fa fa-cc-mastercard' aria-hidden='true' /></p>
            </div>
            <div className='donate-fields'>
              <p><input type='text' className='checkout-input checkout-name' placeholder='Your name' /></p>
              <p><input type='text' className='checkout-input checkout-exp' placeholder='MM' /></p>
              <p><input type='text' className='checkout-input checkout-exp' placeholder='YY' /></p>
              <p><input type='text' className='checkout-input checkout-card' placeholder='4111 1111 1111 1111' /></p>
              <p><input type='text' className='checkout-input checkout-cvc' placeholder='CVC' /></p>
            </div>
            <h3>Amount</h3>
            <div className='donate-fields'>
              <p>
                <input ref='amount' type='text' className='checkout-input checkout-amount' placeholder='How much?' />
              </p>
            </div>
            <h3>Choose a Group</h3>
            <div className='donate-fields'>
              <p>
                <select ref='group' name='checkout-input group-select'>
                  {this.groupOptions}
                </select>
              </p>
            </div>
            <h3>Choose a Charity</h3>
            <div className='donate-fields'>
              <p>
                <select ref='charity' name='checkout-input group-select'>
                  <option value='st-jude'>Donate to St. Jude</option>
                  <option value='wounded-warrior'>Wounded Warrior Project</option>
                  <option value='syrian-refugees'>Support Syrian Refugees</option>
                  <option value='doctors-without-borders'>Doctors Without Borders, USA</option>
                  <option value='save-the-children'>Save The Children</option>
                  <option value='unicef'>United States Fund for UNICEF</option>
                  <option value='aclu'>American Civil Liberties Union Foundation</option>
                  <option value='oxfam'>Oxfam American</option>
                  <option value='environmental-defense-fund'>Environmental Defense Fund</option>
                </select>
              </p>
              <h6>I agree to release the designated funds to the preferred charity of the WINNER of my group's "Dash". If I am the winner, all proceeds will go to my preferred charity.</h6>
            </div>
            <a className='submit-button'
              role='button'
              onClick={this.submitDonation}>
              <span>Submit</span>
              <div className='icon'>
                <i className='fa fa-play' />
              </div>
            </a>
          </form>
        </div>
      </div>
    )
  }
}

export default DonateModal
