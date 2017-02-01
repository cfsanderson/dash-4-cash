import React, { Component } from 'react'
import InnerNavbar from './InnerNavbar.js'
import InnerFooter from './InnerFooter'
import { Link } from 'react-router'

export default class MyGroups extends Component {

  state = {
    visible: false
  }

  groupModalToggle = () => {
    this.setState({ visible: !this.state.visible })
    console.log('modal')
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
                <li>
                  <h3>Bradenton Runners Club</h3>
                  <p>2 members</p>
                  <a className='add-members-button'
                    role='button'
                    onClick={this.groupModalToggle}>
                    <span>Add Members</span>
                    <div className='icon'>
                      <i className='fa fa-plus' />
                    </div>
                  </a>
                </li>
                <li>
                  <h3>St. Pete Runners Club</h3>
                  <p className='clubPic'>69 members</p>
                  <a className='add-members-button'
                    role='button'
                    onClick={this.groupModalToggle}>
                    <span>Add Members</span>
                    <div className='icon'>
                      <i className='fa fa-plus' />
                    </div>
                  </a>
                </li>
                <li>
                  <h3>The Iron Yard Runners</h3>
                  <p className='clubPic'>42 members</p>
                  <a className='add-members-button'
                    role='button'
                    onClick={this.groupModalToggle}>
                    <span>Add Members</span>
                    <div className='icon'>
                      <i className='fa fa-plus' />
                    </div>
                  </a>
                </li>
                <li>
                  <h3>Sarasota Runners Club</h3>
                  <p className='clubPic'>144 members</p>
                  <a className='add-members-button'
                    role='button'
                    onClick={this.groupModalToggle}>
                    <span>Add Members</span>
                    <div className='icon'>
                      <i className='fa fa-plus' />
                    </div>
                  </a>
                </li>
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

        <InnerFooter />
        <InnerNavbar />
      </div>
    )
  }
}

/* <table>
    <tbody>
    <tr>
        <th colSpan='3'>My Groups</th>
      </tr>
    <tr>
        <td><h3>Bradenton Runners Club</h3></td>
        <td>10 members</td>
      </tr>
    <tr>
        <td>
        <a className='add-members-button' href='#' role='button'>
            <span>Add Members</span>
            <div className='icon'>
            <i className='fa fa-plus' />
          </div>
          </a>
      </td>
      </tr>
    <tr>
        <td><h3>Sarasota Runners</h3></td>
        <td>22 members</td>
      </tr>
    <tr>
        <td>
        <a className='add-members-button' href='#' role='button'>
            <span>Add Members</span>
            <div className='icon'>
            <i className='fa fa-plus' />
          </div>
          </a>
      </td>
      </tr>
    <tr>
        <td><h3>WBBC Runners</h3></td>
        <td>133 members</td>
      </tr>
    <tr>
        <td>
        <a className='add-members-button' href='#' role='button'>
            <span>Add Members</span>
            <div className='icon'>
            <i className='fa fa-plus' />
          </div>
          </a>
      </td>
      </tr>
    <tr>
        <td><h3>WBBC Runners</h3></td>
        <td>133 members</td>
      </tr>
    <tr>
        <td>
        <a className='add-members-button' href='#' role='button'>
            <span>Add Members</span>
            <div className='icon'>
            <i className='fa fa-plus' />
          </div>
          </a>
      </td>
      </tr>
    <tr>
        <td><h3>WBBC Runners</h3></td>
        <td>133 members</td>
      </tr>
    <tr>
        <td>
        <a className='add-members-button' href='#' role='button'>
            <span>Add Members</span>
            <div className='icon'>
            <i className='fa fa-plus' />
          </div>
          </a>
      </td>
      </tr>
    <tr>
        <td><h3>WBBC Runners</h3></td>
        <td>133 members</td>
      </tr>
    <tr>
        <td>
        <a className='add-members-button' href='#' role='button'>
            <span>Add Members</span>
            <div className='icon'>
            <i className='fa fa-plus' />
          </div>
          </a>
      </td>
      </tr>
  </tbody>
</table> */
