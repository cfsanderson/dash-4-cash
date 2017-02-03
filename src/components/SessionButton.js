import React, { Component } from 'react'
import withAuth from '../utils/withAuth'
import stravaButton from '../images/buttons/btn_strava_connectwith_orange.svg'

@withAuth
class SessionButton extends Component {

  handleClick = () => {
    this.props.auth.signIn()
  }

  render () {
    return (
      <a className='stravabutton' onClick={this.handleClick}>
        <img src={stravaButton} />
      </a>
    )
  }
}

export default SessionButton
