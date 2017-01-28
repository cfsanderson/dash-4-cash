import React from 'react'
import InnerNavbar from './InnerNavbar.js'

export default function MyGroups () {
  return (
    <div>
      <InnerNavbar />
      <div className='inner'>
        <header>
          <h1>My Groups</h1>
        </header>
        <div>
          <table>
            <tbody>
              {/* <tr>
                <th colSpan='3'>My Groups</th>
              </tr> */}
              <tr>
                <td>Bradenton Runners Club</td>
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
                <td>Sarasota Runners</td>
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
                <td>WBBC Runners</td>
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
                <td>WBBC Runners</td>
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
                <td>WBBC Runners</td>
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
                <td>WBBC Runners</td>
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
          </table>
        </div>
      </div>
    </div>
  )
}
