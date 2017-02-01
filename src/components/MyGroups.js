import React from 'react'
import InnerNavbar from './InnerNavbar.js'
import InnerFooter from './InnerFooter'
import { Link } from 'react-router'

export default function MyGroups () {
  return (
    <div>
      <div className='inner'>
        <header className='myGroups'>
          <h1>My Groups</h1>
        </header>
        <div className='lower'>
          <ul className='myGroups-ul'>
            <li>
              <h3>Bradenton Runners Club</h3>
              <p>2 members</p>
              <a className='add-members-button' href='#' role='button'>
                <span>Add Members</span>
                <div className='icon'>
                  <i className='fa fa-plus' />
                </div>
              </a>
            </li>
            <li>
              <h3>St. Pete Runners Club</h3>
              <p className='clubPic'>69 members</p>
              <a className='add-members-button' href='#' role='button'>
                <span>Add Members</span>
                <div className='icon'>
                  <i className='fa fa-plus' />
                </div>
              </a>
            </li>
            <li>
              <h3>The Iron Yard Runners</h3>
              <p className='clubPic'>42 members</p>
              <a className='add-members-button' href='#' role='button'>
                <span>Add Members</span>
                <div className='icon'>
                  <i className='fa fa-plus' />
                </div>
              </a>
            </li>
            <li>
              <h3>Sarasota Runners Club</h3>
              <p className='clubPic'>144 members</p>
              <a className='add-members-button' href='#' role='button'>
                <span>Add Members</span>
                <div className='icon'>
                  <i className='fa fa-plus' />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <InnerFooter />
      <InnerNavbar />
    </div>
  )
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
